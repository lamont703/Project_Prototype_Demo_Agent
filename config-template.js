// =====================================================
// Configuration Template for AI Product Demo
// INSTRUCTIONS: 
// 1. Copy this file to config-simple.js
// 2. Replace 'your_elevenlabs_api_key_here' with your actual API key
// 3. Never commit config-simple.js to Git
// =====================================================

const CONFIG = {
    // ===== Voice Configuration =====
    // 🔑 IMPORTANT: Replace with your actual ElevenLabs API key
    // Get your key from: https://elevenlabs.io/app/api-keys
    // To use Web Speech API instead, leave as placeholder
    ELEVENLABS_API_KEY: 'your_elevenlabs_api_key_here',
    
    // Voice settings
    VOICE_ENABLED: true,
    WEB_SPEECH_FALLBACK: true,
    DEFAULT_VOICE: 'jahmal', // Jahmal - comedy AI assistant with personality
    DEFAULT_VOLUME: 0.8,
    DEFAULT_SPEED: 1.0,
    
    // ===== Demo Settings =====
    DEBUG_MODE: true,
    AUTO_START_TOUR: true,
    AUTO_MINIMIZE_ASSISTANT: true,
    ENABLE_VISUAL_EFFECTS: true,
    
    // ===== API Configuration =====
    ELEVENLABS_API_URL: 'https://api.elevenlabs.io/v1/text-to-speech',
    // Using latest human-like model for natural, conversational speech
    ELEVENLABS_MODEL_ID: 'eleven_multilingual_v2',
    
    // ===== Voice Characters =====
    VOICE_CHARACTERS: {
        'jahmal': {
            // Vibrant 30-year-old male with natural conversational style and humor
            id: 'DTKMou8ccj1ZaWGBiotd', // Custom voice ID - replace with your own
            name: 'Jahmal',
            description: 'Comedy & Humor - 30-year-old male with natural style',
            gender: 'male',
            accent: 'american',
            personality: 'vibrant',
            age: 30,
            style: 'conversational_humor'
        },
        'keisha': {
            // Vibrant 30-year-old with natural conversational style and humor
            id: 'EXAVITQu4vr4xnSDxMaL', // Sarah voice but with new personality
            name: 'Keisha',
            description: 'Vibrant & Fun - 30-year-old with natural style',
            gender: 'female',
            accent: 'american',
            personality: 'vibrant',
            age: 30,
            style: 'conversational_humor'
        },
        'sarah': {
            // ElevenLabs "Sarah" - warm and approachable professional voice
            id: 'EXAVITQu4vr4xnSDxMaL',
            name: 'Sarah',
            description: 'Warm & Approachable - Perfect for Demos',
            gender: 'female',
            accent: 'american',
            personality: 'warm'
        },
        'rachel': {
            // Calm, soothing female voice - perfect for AI assistant
            id: '21m00Tcm4TlvDq8ikWAM',
            name: 'Rachel',
            description: 'Calm Female - Soothing & Clear',
            gender: 'female',
            accent: 'american',
            personality: 'calm'
        },
        'nia': {
            // Alternative voice option for variety
            id: '21m00Tcm4TlvDq8ikWAM', // Rachel voice with different personality
            name: 'Nia',
            description: 'Cool & Confident - Urban Professional',
            gender: 'female',
            accent: 'american',
            personality: 'confident',
            age: 28,
            style: 'urban_professional'
        },
        'bella': {
            // ElevenLabs "Bella" - friendly, conversational female voice
            id: 'EXAVITQu4vr4xnSDxMaL',
            name: 'Bella',
            description: 'Friendly Female - Conversational & Engaging',
            gender: 'female',
            accent: 'american',
            personality: 'friendly'
        },
        'elli': {
            // Youthful, energetic female voice
            id: 'MF3mGyEYCl7XYWbV9V6O',
            name: 'Elli',
            description: 'Youthful Female - Energetic & Bright',
            gender: 'female',
            accent: 'american',
            personality: 'energetic'
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

// Validation
function validateConfig() {
    if (!isApiKeyConfigured()) {
        const isProduction = window.location.hostname.includes('github.io') || 
                           window.location.hostname.includes('netlify.app') ||
                           window.location.hostname.includes('vercel.app');
        const message = isProduction 
            ? 'ℹ️ Production deployment: Using Web Speech API (configure environment variables for ElevenLabs)' 
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