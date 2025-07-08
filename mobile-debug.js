// Mobile Debug Script for iOS Voice and Touch Issues
// This script will help diagnose problems with mobile voice playback and touch events

class MobileDebugger {
    constructor() {
        this.logs = [];
        this.isDebugMode = true;
        this.init();
    }

    init() {
        console.log('🔍 Mobile Debugger initialized');
        this.detectDevice();
        this.testVoiceCapabilities();
        this.testTouchEvents();
        this.addDebugOverlay();
    }

    log(message) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] ${message}`;
        this.logs.push(logEntry);
        console.log(logEntry);
        this.updateDebugDisplay();
    }

    detectDevice() {
        const userAgent = navigator.userAgent;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent);
        const isAndroid = /Android/.test(userAgent);
        const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        
        this.log(`📱 Device: ${isIOS ? 'iOS' : isAndroid ? 'Android' : 'Other'}`);
        this.log(`📱 Mobile: ${isMobile ? 'Yes' : 'No'}`);
        this.log(`📱 Touch: ${('ontouchstart' in window) ? 'Yes' : 'No'}`);
        this.log(`📱 Screen: ${window.innerWidth}x${window.innerHeight}`);
    }

    testVoiceCapabilities() {
        // Test Web Speech API
        if ('speechSynthesis' in window) {
            this.log('🎙️ Web Speech API: Available');
            
            // Test voices
            const voices = speechSynthesis.getVoices();
            this.log(`🎙️ Voices loaded: ${voices.length}`);
            
            if (voices.length === 0) {
                this.log('🎙️ Waiting for voices to load...');
                speechSynthesis.addEventListener('voiceschanged', () => {
                    const newVoices = speechSynthesis.getVoices();
                    this.log(`🎙️ Voices loaded after event: ${newVoices.length}`);
                    this.logVoices(newVoices);
                });
            } else {
                this.logVoices(voices);
            }
        } else {
            this.log('🎙️ Web Speech API: Not Available');
        }

        // Test Audio API
        try {
            const audio = new Audio();
            this.log('🎵 Audio API: Available');
            this.log(`🎵 Audio formats: ${audio.canPlayType('audio/mpeg') ? 'MP3 ' : ''}${audio.canPlayType('audio/wav') ? 'WAV ' : ''}${audio.canPlayType('audio/ogg') ? 'OGG' : ''}`);
        } catch (error) {
            this.log('🎵 Audio API: Error - ' + error.message);
        }
    }

    logVoices(voices) {
        const femaleVoices = voices.filter(v => {
            const name = v.name.toLowerCase();
            return name.includes('female') || name.includes('woman') || 
                   name.includes('samantha') || name.includes('karen') || 
                   name.includes('susan') || name.includes('allison');
        });
        
        this.log(`🎙️ Female voices found: ${femaleVoices.length}`);
        femaleVoices.forEach(v => this.log(`🎙️ - ${v.name} (${v.lang})`));
        
        if (femaleVoices.length === 0) {
            this.log('🎙️ Available voices:');
            voices.slice(0, 5).forEach(v => this.log(`🎙️ - ${v.name} (${v.lang})`));
        }
    }

    testTouchEvents() {
        this.log('👆 Testing touch events...');
        
        // Test touch responsiveness
        const testTouchDelay = () => {
            const start = performance.now();
            const testTouch = () => {
                const delay = performance.now() - start;
                this.log(`👆 Touch response time: ${delay.toFixed(2)}ms`);
                document.removeEventListener('touchstart', testTouch);
                document.removeEventListener('click', testTouch);
            };
            
            document.addEventListener('touchstart', testTouch, { once: true });
            document.addEventListener('click', testTouch, { once: true });
        };
        
        setTimeout(testTouchDelay, 1000);
    }

    testVoicePlayback() {
        this.log('🎙️ Testing voice playback...');
        
        if ('speechSynthesis' in window) {
            try {
                const utterance = new SpeechSynthesisUtterance('Testing mobile voice playback');
                utterance.volume = 0.5;
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                
                utterance.onstart = () => this.log('🎙️ Voice started successfully');
                utterance.onend = () => this.log('🎙️ Voice ended successfully');
                utterance.onerror = (error) => this.log('🎙️ Voice error: ' + error.error);
                
                speechSynthesis.speak(utterance);
            } catch (error) {
                this.log('🎙️ Voice test error: ' + error.message);
            }
        } else {
            this.log('🎙️ Cannot test voice - Web Speech API not available');
        }
    }

    addDebugOverlay() {
        if (!this.isDebugMode) return;
        
        const overlay = document.createElement('div');
        overlay.id = 'mobile-debug-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 300px;
            max-height: 400px;
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 10px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            overflow-y: auto;
            display: none;
        `;
        
        const header = document.createElement('div');
        header.innerHTML = `
            <strong>📱 Mobile Debug</strong>
            <button id="debug-toggle" style="float: right; background: #333; color: white; border: none; padding: 2px 6px; border-radius: 3px; cursor: pointer;">Hide</button>
            <button id="test-voice" style="float: right; margin-right: 5px; background: #007bff; color: white; border: none; padding: 2px 6px; border-radius: 3px; cursor: pointer;">Test Voice</button>
        `;
        
        const content = document.createElement('div');
        content.id = 'debug-content';
        content.style.cssText = 'margin-top: 10px; white-space: pre-wrap;';
        
        overlay.appendChild(header);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
        
        // Toggle button
        document.getElementById('debug-toggle').addEventListener('click', () => {
            overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
        });
        
        // Test voice button
        document.getElementById('test-voice').addEventListener('click', () => {
            this.testVoicePlayback();
        });
        
        // Show debug panel on mobile
        if (window.innerWidth <= 768) {
            overlay.style.display = 'block';
        }
    }

    updateDebugDisplay() {
        const content = document.getElementById('debug-content');
        if (content) {
            content.textContent = this.logs.slice(-15).join('\n');
        }
    }

    // Public method to test voice from console
    testVoice() {
        this.testVoicePlayback();
    }
}

// Initialize debug mode only if URL contains debug parameter
if (window.location.search.includes('debug=true') || window.location.search.includes('mobile-debug')) {
    window.mobileDebugger = new MobileDebugger();
}

// Also provide a way to manually enable debugging
window.enableMobileDebug = function() {
    if (!window.mobileDebugger) {
        window.mobileDebugger = new MobileDebugger();
    }
}; 