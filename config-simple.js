// =====================================================
// Simple Configuration for AI Product Demo
// =====================================================

const CONFIG = {
    // ===== Voice Configuration =====
    // To use ElevenLabs API, replace with your actual key
    // To use Web Speech API, leave as is
    ELEVENLABS_API_KEY: 'your_elevenlabs_api_key_here',
    
    // Voice settings
    VOICE_ENABLED: true,
    WEB_SPEECH_FALLBACK: true,
    DEFAULT_VOICE: 'sarah',
    DEFAULT_VOLUME: 0.8,
    DEFAULT_SPEED: 1.0,
    
    // ===== Demo Settings =====
    DEBUG_MODE: true,
    AUTO_START_TOUR: true,
    AUTO_MINIMIZE_ASSISTANT: true,
    ENABLE_VISUAL_EFFECTS: true,
    
    // ===== API Configuration =====
    ELEVENLABS_API_URL: 'https://api.elevenlabs.io/v1/text-to-speech',
    ELEVENLABS_MODEL_ID: 'eleven_monolingual_v1',
    
    // ===== Voice Characters =====
    VOICE_CHARACTERS: {
        'sarah': {
            id: 'EXAVITQu4vr4xnSDxMaL',
            name: 'Sarah',
            description: 'Friendly Female',
            gender: 'female',
            accent: 'american'
        }
    }
};

// Helper functions
function getConfig(key = null) {
    if (key) return CONFIG[key];
    return CONFIG;
}

function isApiKeyConfigured() {
    return CONFIG.ELEVENLABS_API_KEY && 
           CONFIG.ELEVENLABS_API_KEY !== 'your_elevenlabs_api_key_here';
}

function getVoiceCharacter(voiceId) {
    return CONFIG.VOICE_CHARACTERS[voiceId] || CONFIG.VOICE_CHARACTERS[CONFIG.DEFAULT_VOICE];
}

// Validation (simplified)
function validateConfig() {
    if (!isApiKeyConfigured()) {
        const isProduction = window.location.hostname.includes('github.io');
        const message = isProduction 
            ? 'ℹ️ Production deployment: Using Web Speech API' 
            : 'ℹ️ Using Web Speech API (no ElevenLabs API key configured)';
        
        if (CONFIG.DEBUG_MODE) {
            console.log(message);
        }
    }
}

// Initialize
validateConfig();

// Export to window
window.APP_CONFIG = CONFIG;
window.getConfig = getConfig;
window.isApiKeyConfigured = isApiKeyConfigured;
window.getVoiceCharacter = getVoiceCharacter; 