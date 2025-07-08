// =====================================================
// Configuration File for AI Product Demo
// =====================================================

/**
 * Environment Configuration
 * 
 * IMPORTANT: For production deployment, use environment variables
 * or a secure configuration management system.
 * 
 * To use your own ElevenLabs API key:
 * 1. Sign up at https://elevenlabs.io
 * 2. Get your API key from the account dashboard
 * 3. Replace 'your_elevenlabs_api_key_here' with your actual key
 */

// Development Environment Configuration
const CONFIG = {
    // ===================================
    // ElevenLabs Voice API Configuration
    // ===================================
    
    // Replace with your actual ElevenLabs API key
    ELEVENLABS_API_KEY: 'your_elevenlabs_api_key_here',
    
    // ElevenLabs API endpoint
    ELEVENLABS_API_URL: 'https://api.elevenlabs.io/v1/text-to-speech',
    
    // Model ID for voice generation
    ELEVENLABS_MODEL_ID: 'eleven_monolingual_v1',
    
    // ===================================
    // Voice Settings
    // ===================================
    
    // Enable/disable voice features
    VOICE_ENABLED: true,
    
    // Fallback to Web Speech API if ElevenLabs fails
    WEB_SPEECH_FALLBACK: true,
    
    // Default voice settings
    DEFAULT_VOICE: 'sarah',
    DEFAULT_VOLUME: 0.8,
    DEFAULT_SPEED: 1.0,
    
    // ===================================
    // Demo Configuration
    // ===================================
    
    // Enable debug logging
    DEBUG_MODE: true,
    
    // Tour settings
    AUTO_START_TOUR: true,
    AUTO_MINIMIZE_ASSISTANT: true,
    
    // Animation settings
    ENABLE_VISUAL_EFFECTS: true,
    ENABLE_SPARKLE_EFFECTS: true,
    
    // ===================================
    // Available Voice Characters
    // ===================================
    
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

// =====================================================
// Configuration Validation and Helpers
// =====================================================

/**
 * Validate configuration on load
 */
function validateConfig() {
    const warnings = [];
    
    // Check if API key is set
    if (CONFIG.ELEVENLABS_API_KEY === 'your_elevenlabs_api_key_here') {
        warnings.push('⚠️ ElevenLabs API key not configured. Voice features will use Web Speech API fallback.');
    }
    
    // Log warnings in debug mode
    if (CONFIG.DEBUG_MODE && warnings.length > 0) {
        console.group('🔧 Configuration Warnings');
        warnings.forEach(warning => console.warn(warning));
        console.groupEnd();
    }
    
    return warnings.length === 0;
}

/**
 * Get environment configuration
 */
function getConfig(key = null) {
    if (key) {
        return CONFIG[key];
    }
    return CONFIG;
}

/**
 * Check if API key is configured
 */
function isApiKeyConfigured() {
    return CONFIG.ELEVENLABS_API_KEY && CONFIG.ELEVENLABS_API_KEY !== 'your_elevenlabs_api_key_here';
}

/**
 * Get voice character configuration
 */
function getVoiceCharacter(voiceId) {
    return CONFIG.VOICE_CHARACTERS[voiceId] || CONFIG.VOICE_CHARACTERS[CONFIG.DEFAULT_VOICE];
}

// =====================================================
// Environment Setup Instructions
// =====================================================

/**
 * SETUP INSTRUCTIONS:
 * 
 * For Development:
 * 1. Replace the ELEVENLABS_API_KEY value above with your actual API key
 * 2. Modify other settings as needed
 * 
 * For Production:
 * 1. Use environment variables or secure configuration management
 * 2. Never commit real API keys to version control
 * 3. Consider using build-time environment variable injection
 * 
 * Alternative .env file approach (requires build system):
 * 1. Create a .env file in your project root
 * 2. Add: ELEVENLABS_API_KEY=your_actual_key_here
 * 3. Use a build tool like Webpack or Vite to inject variables
 * 4. Access via process.env.ELEVENLABS_API_KEY
 */

// =====================================================
// Export Configuration
// =====================================================

// Validate configuration on load
validateConfig();

// Export for use in other modules
if (typeof window !== 'undefined') {
    // Browser environment
    window.APP_CONFIG = CONFIG;
    window.getConfig = getConfig;
    window.isApiKeyConfigured = isApiKeyConfigured;
    window.getVoiceCharacter = getVoiceCharacter;
}

// For module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        getConfig,
        isApiKeyConfigured,
        getVoiceCharacter,
        validateConfig
    };
} 