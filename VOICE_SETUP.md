# ElevenLabs Voice Integration Setup Guide

## Overview

The AI Product Demo Agent now supports real voice synthesis using ElevenLabs API, providing a much more engaging and realistic demo experience. Users can hear the AI assistant speak with natural, high-quality voices.

## Features

### 🎙️ **Voice Capabilities**

- **ElevenLabs Integration**: High-quality AI voices using ElevenLabs API
- **Multiple Voices**: 8 different voice options (male/female, various personalities)
- **Fallback Support**: Browser speech synthesis when API isn't available
- **Voice Controls**: Play/pause, volume, speed controls
- **Real-time Settings**: Adjust voice settings on the fly

### 🎛️ **Voice Settings**

- **Voice Selection**: Choose from 8 pre-configured voices
- **Volume Control**: 0-100% volume adjustment
- **Speed Control**: 0.5x-2.0x playback speed
- **Voice Test**: Test voices before applying
- **Auto-play**: Automatically speak new messages

## Setup Instructions

### Step 1: Get ElevenLabs API Key

1. Go to [ElevenLabs](https://elevenlabs.io/)
2. Sign up for an account (free tier available)
3. Navigate to your profile settings
4. Copy your API key

### Step 2: Configure API Key

Open `voice-config.js` and replace the placeholder:

```javascript
const VOICE_CONFIG = {
  // Replace this with your actual API key
  apiKey: "YOUR_ELEVENLABS_API_KEY_HERE",
  // ... rest of config
};
```

**Important**: Never commit your actual API key to version control!

### Step 3: Environment Variables (Recommended)

For production deployment, use environment variables:

```javascript
// voice-config.js
const VOICE_CONFIG = {
  apiKey: process.env.ELEVENLABS_API_KEY || "YOUR_ELEVENLABS_API_KEY_HERE",
  // ... rest of config
};
```

## Available Voices

| Voice Name | Voice ID             | Description               |
| ---------- | -------------------- | ------------------------- |
| Sarah      | EXAVITQu4vr4xnSDxMaL | Friendly Female (Default) |
| Rachel     | 21m00Tcm4TlvDq8ikWAM | Professional Female       |
| Drew       | 29vD33N1CtxCmqQRPOHJ | Calm Male                 |
| Paul       | 5Q0t7uMcjvnagumLfvZi | Confident Male            |
| Antoni     | ErXwobaYiN019PkySvjV | Warm Male                 |
| Arnold     | VR6AewLTigWG4xSOukaG | Energetic Male            |
| Adam       | pNInz6obpgDQGcFmaJgB | Professional Male         |
| Sam        | yoZ06aMxZJJ28mfd3POQ | Casual Male               |

## Voice Controls Usage

### For Users

1. **Enable/Disable Voice**: Click the 🔊 Voice button
2. **Voice Settings**: Click the ⚙️ Voice button to open settings panel
3. **Change Voice**: Select from dropdown in settings
4. **Adjust Volume**: Use volume slider (0-100%)
5. **Adjust Speed**: Use speed slider (0.5x-2.0x)
6. **Test Voice**: Click 🎤 Test Voice button
7. **Message Controls**: Each message has play/pause controls

### For Developers

```javascript
// Initialize voice manager
const voiceManager = new VoiceManager();

// Speak text
await voiceManager.speak("Hello, welcome to our platform!");

// Change voice
voiceManager.setVoice("rachel");

// Adjust volume
voiceManager.setVolume(0.8); // 80%

// Stop current speech
voiceManager.stop();

// Check if voice is enabled
if (voiceManager.isVoiceEnabled()) {
  // Voice is available
}
```

## Fallback Behavior

When ElevenLabs API is not available:

1. **No API Key**: Falls back to browser speech synthesis
2. **API Error**: Automatically switches to fallback
3. **Network Issues**: Graceful degradation to text-only
4. **Browser Support**: Works in all modern browsers

## Customization

### Adding New Voices

1. Get voice ID from ElevenLabs
2. Add to `VOICE_CONFIG.voices` object:

```javascript
voices: {
  // ... existing voices
  newvoice: "new_voice_id_here";
}
```

3. Update HTML dropdown in `index.html`

### Voice Settings

Modify `VOICE_CONFIG.settings` in `voice-config.js`:

```javascript
settings: {
    stability: 0.75,        // Voice consistency (0-1)
    similarity_boost: 0.8,  // Voice similarity (0-1)
    style: 0.3,            // Style emphasis (0-1)
    use_speaker_boost: true // Audio enhancement
}
```

## API Usage & Costs

### ElevenLabs Pricing

- **Free Tier**: 10,000 characters/month
- **Starter**: $5/month for 30,000 characters
- **Creator**: $22/month for 100,000 characters
- **Pro**: $99/month for 500,000 characters

### Optimization Tips

1. **Cache Audio**: Store generated audio for repeated phrases
2. **Batch Requests**: Combine multiple short texts
3. **Fallback Strategy**: Use browser speech for less important messages
4. **Character Limits**: Monitor usage to stay within limits

## Troubleshooting

### Common Issues

1. **No Voice Output**

   - Check API key configuration
   - Verify network connection
   - Check browser console for errors

2. **Voice Settings Not Working**

   - Ensure voice-config.js is loaded
   - Check JavaScript console for errors
   - Verify HTML elements exist

3. **API Errors**
   - Check API key validity
   - Verify ElevenLabs account status
   - Monitor rate limits

### Debug Mode

Enable debug logging:

```javascript
// Add to voice-config.js
const VOICE_CONFIG = {
  // ... existing config
  debug: true,
};
```

## Security Considerations

1. **API Key Protection**: Never expose API keys in client-side code for production
2. **Environment Variables**: Use server-side configuration
3. **Rate Limiting**: Implement client-side rate limiting
4. **Error Handling**: Graceful fallback for API failures

## Browser Compatibility

| Browser | ElevenLabs API | Fallback Speech |
| ------- | -------------- | --------------- |
| Chrome  | ✅             | ✅              |
| Firefox | ✅             | ✅              |
| Safari  | ✅             | ✅              |
| Edge    | ✅             | ✅              |

## Implementation Examples

### Basic Integration

```javascript
// Initialize with voice
const assistant = new AIAssistant();

// Add voice message
assistant.addMessage("Welcome to our platform!", "assistant", true, true);
```

### Custom Voice Settings

```javascript
// Speak with specific voice settings
await voiceManager.speak("Custom message", {
  voiceId: "rachel",
  stability: 0.9,
  style: 0.5,
});
```

### Conditional Voice

```javascript
// Only use voice for important messages
const isImportant = messageType === "welcome" || messageType === "demo";
assistant.addMessage(content, "assistant", true, isImportant);
```

## Next Steps

1. **Test Integration**: Use the test page (`demo-test.html`) to verify voice functionality
2. **Configure Voices**: Adjust voice settings to match your brand
3. **Monitor Usage**: Track API usage to optimize costs
4. **Gather Feedback**: Test with users to optimize voice experience

For support or questions, check the ElevenLabs documentation or create an issue in the project repository.
