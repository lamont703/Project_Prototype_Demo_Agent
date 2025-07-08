// =====================================================
// Custom Voice ID Helper Script
// =====================================================

// Function to add a custom voice ID for Keisha
function addCustomVoiceId(voiceId, voiceName = 'Custom Keisha') {
    if (!voiceId) {
        console.error('❌ Voice ID is required');
        return false;
    }
    
    // Validate voice ID format (basic check)
    if (voiceId.length < 10 || !voiceId.match(/^[a-zA-Z0-9]+$/)) {
        console.error('❌ Invalid voice ID format');
        return false;
    }
    
    // Update CONFIG with new voice ID
    CONFIG.VOICE_CHARACTERS.keisha.id = voiceId;
    CONFIG.VOICE_CHARACTERS.keisha.name = voiceName;
    
    console.log(`✅ Updated Keisha's voice ID to: ${voiceId}`);
    console.log(`✅ Voice name: ${voiceName}`);
    
    return true;
}

// Function to test a voice ID before applying it
async function testVoiceId(voiceId, testText = "Hey there! I'm Keisha, testing out my new voice!") {
    const apiKey = CONFIG.ELEVENLABS_API_KEY;
    
    if (!apiKey || apiKey === 'your_elevenlabs_api_key_here') {
        console.error('❌ ElevenLabs API key not configured');
        return false;
    }
    
    console.log(`🧪 Testing voice ID: ${voiceId}`);
    
    try {
        const response = await fetch(`${CONFIG.ELEVENLABS_API_URL}/${voiceId}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': apiKey
            },
            body: JSON.stringify({
                text: testText,
                model_id: CONFIG.ELEVENLABS_MODEL_ID,
                voice_settings: {
                    stability: 0.75,
                    similarity_boost: 0.85,
                    style: 0.25,
                    use_speaker_boost: true
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        const audio = new Audio(audioUrl);
        audio.onended = () => URL.revokeObjectURL(audioUrl);
        
        await audio.play();
        
        console.log('✅ Voice ID test successful!');
        return true;
        
    } catch (error) {
        console.error('❌ Voice ID test failed:', error);
        return false;
    }
}

// Function to get voice info from ElevenLabs
async function getVoiceInfo(voiceId) {
    const apiKey = CONFIG.ELEVENLABS_API_KEY;
    
    if (!apiKey || apiKey === 'your_elevenlabs_api_key_here') {
        console.error('❌ ElevenLabs API key not configured');
        return null;
    }
    
    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/voices/${voiceId}`, {
            headers: {
                'xi-api-key': apiKey
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const voiceData = await response.json();
        console.log('🎤 Voice Info:', voiceData);
        return voiceData;
        
    } catch (error) {
        console.error('❌ Failed to get voice info:', error);
        return null;
    }
}

// Usage examples:
console.log(`
🎤 CUSTOM VOICE ID HELPER

Usage Examples:
1. Test a voice ID:
   testVoiceId('your_voice_id_here')

2. Add and use a custom voice:
   addCustomVoiceId('your_voice_id_here', 'Custom Keisha Voice')

3. Get voice information:
   getVoiceInfo('your_voice_id_here')
`);

// Export functions for global use
if (typeof window !== 'undefined') {
    window.addCustomVoiceId = addCustomVoiceId;
    window.testVoiceId = testVoiceId;
    window.getVoiceInfo = getVoiceInfo;
} 