// ElevenLabs Voice Configuration
// Uses configuration from config.js for environment variables
const VOICE_CONFIG = {
    // ElevenLabs API Configuration (from environment)
    apiKey: getConfig('ELEVENLABS_API_KEY'),
    apiUrl: getConfig('ELEVENLABS_API_URL'),
    
    // Voice Settings
    voiceId: getVoiceCharacter(getConfig('DEFAULT_VOICE')).id,
    
    // Alternative voice options (from environment)
    voices: Object.fromEntries(
        Object.entries(getConfig('VOICE_CHARACTERS')).map(([key, value]) => [key, value.id])
    ),
    
    // Voice Parameters
    settings: {
        stability: 0.75,        // Voice stability (0-1)
        similarity_boost: 0.8,  // Voice similarity (0-1)
        style: 0.3,            // Style exaggeration (0-1)
        use_speaker_boost: true // Enhance speaker clarity
    },
    
    // Playback Settings
    playback: {
        autoPlay: true,         // Auto-play voice messages
        showControls: true,     // Show voice controls
        volume: getConfig('DEFAULT_VOLUME'),
        rate: getConfig('DEFAULT_SPEED'),
        showWaveform: true     // Show audio waveform
    },
    
    // Fallback Settings
    fallback: {
        useWebSpeech: getConfig('WEB_SPEECH_FALLBACK'),
        fallbackVoice: 'en-US' // Browser voice language
    }
};

// Voice Manager Class
class VoiceManager {
    constructor() {
        this.isEnabled = false;
        this.currentAudio = null;
        this.isPlaying = false;
        this.audioQueue = [];
        this.volume = VOICE_CONFIG.playback.volume;
        this.rate = VOICE_CONFIG.playback.rate;
        this.apiKey = VOICE_CONFIG.apiKey;
        this.currentVoice = VOICE_CONFIG.voiceId;
        
        this.initializeVoice();
    }
    
    initializeVoice() {
        // Check if API key is configured using the new environment system
        if (isApiKeyConfigured()) {
            this.isEnabled = getConfig('VOICE_ENABLED');
            if (getConfig('DEBUG_MODE')) {
                console.log('✅ ElevenLabs voice enabled with API key');
            }
        } else {
            if (getConfig('DEBUG_MODE')) {
                console.log('⚠️ ElevenLabs API key not configured, using fallback');
            }
            this.isEnabled = VOICE_CONFIG.fallback.useWebSpeech;
        }
    }
    
    async speak(text, options = {}) {
        if (!this.isEnabled) {
            console.log('Voice disabled, skipping:', text);
            return;
        }
        
        // Add to queue if currently playing
        if (this.isPlaying) {
            this.audioQueue.push({ text, options });
            return;
        }
        
        try {
            if (this.apiKey && this.apiKey !== 'YOUR_ELEVENLABS_API_KEY_HERE') {
                await this.speakWithElevenLabs(text, options);
            } else {
                await this.speakWithWebSpeech(text, options);
            }
        } catch (error) {
            console.error('Voice synthesis error:', error);
            // Fallback to web speech
            if (VOICE_CONFIG.fallback.useWebSpeech) {
                await this.speakWithWebSpeech(text, options);
            }
        }
    }
    
    async speakWithElevenLabs(text, options = {}) {
        this.isPlaying = true;
        
        const voiceId = options.voiceId || this.currentVoice;
        const url = `${VOICE_CONFIG.apiUrl}/${voiceId}`;
        
        const requestBody = {
            text: text,
            model_id: getConfig('ELEVENLABS_MODEL_ID'),
            voice_settings: {
                stability: options.stability || VOICE_CONFIG.settings.stability,
                similarity_boost: options.similarity_boost || VOICE_CONFIG.settings.similarity_boost,
                style: options.style || VOICE_CONFIG.settings.style,
                use_speaker_boost: options.use_speaker_boost || VOICE_CONFIG.settings.use_speaker_boost
            }
        };
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'application/json',
                    'xi-api-key': this.apiKey
                },
                body: JSON.stringify(requestBody)
            });
            
            if (!response.ok) {
                throw new Error(`ElevenLabs API error: ${response.status}`);
            }
            
            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            
            await this.playAudio(audioUrl);
            
        } catch (error) {
            console.error('ElevenLabs API error:', error);
            throw error;
        }
    }
    
    async speakWithWebSpeech(text, options = {}) {
        return new Promise((resolve, reject) => {
            if (!('speechSynthesis' in window)) {
                reject(new Error('Speech synthesis not supported'));
                return;
            }
            
            this.isPlaying = true;
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.volume = options.volume || this.volume;
            utterance.rate = options.rate || this.rate;
            utterance.pitch = options.pitch || 1.0;
            utterance.lang = options.lang || VOICE_CONFIG.fallback.fallbackVoice;
            
            utterance.onend = () => {
                this.isPlaying = false;
                this.processQueue();
                resolve();
            };
            
            utterance.onerror = (error) => {
                this.isPlaying = false;
                reject(error);
            };
            
            speechSynthesis.speak(utterance);
        });
    }
    
    async playAudio(audioUrl) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(audioUrl);
            audio.volume = this.volume;
            
            audio.onended = () => {
                this.isPlaying = false;
                this.currentAudio = null;
                URL.revokeObjectURL(audioUrl);
                this.processQueue();
                resolve();
            };
            
            audio.onerror = (error) => {
                this.isPlaying = false;
                this.currentAudio = null;
                URL.revokeObjectURL(audioUrl);
                reject(error);
            };
            
            this.currentAudio = audio;
            audio.play();
        });
    }
    
    processQueue() {
        if (this.audioQueue.length > 0) {
            const { text, options } = this.audioQueue.shift();
            setTimeout(() => {
                this.speak(text, options);
            }, 500); // Small delay between messages
        }
    }
    
    pause() {
        if (this.currentAudio) {
            this.currentAudio.pause();
        }
        
        if ('speechSynthesis' in window) {
            speechSynthesis.pause();
        }
        
        this.isPlaying = false;
    }
    
    stop() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
        
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
        
        this.isPlaying = false;
        this.audioQueue = [];
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.currentAudio) {
            this.currentAudio.volume = this.volume;
        }
    }
    
    setVoice(voiceId) {
        if (VOICE_CONFIG.voices[voiceId]) {
            this.currentVoice = VOICE_CONFIG.voices[voiceId];
        } else {
            this.currentVoice = voiceId;
        }
    }
    
    setSpeed(speed) {
        this.rate = Math.max(0.5, Math.min(2.0, speed));
    }
    
    getAvailableVoices() {
        return Object.keys(VOICE_CONFIG.voices);
    }
    
    isVoiceEnabled() {
        return this.isEnabled;
    }
    
    isCurrentlyPlaying() {
        return this.isPlaying;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOICE_CONFIG, VoiceManager };
} 