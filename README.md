# AI Product Demo Specialist

An embeddable AI assistant that provides interactive product tours for websites and applications. This lightweight, framework-free solution guides users through product features with visual highlighting and engaging narration.

## 🚀 Features

### Core Functionality

- **Floating AI Assistant**: Customizable floating button with animated avatar
- **Interactive Tours**: Step-by-step guided walkthroughs of product features
- **🔊 Real Voice AI**: ElevenLabs integration for natural speech synthesis with 8 voice options
- **Visual Highlighting**: Dynamic element highlighting with glow effects and animations
- **Smart Navigation**: Automatic scrolling and element focusing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### User Experience

- **🎙️ Natural Voice AI**: Realistic speech synthesis with emotion and personality
- **🎚️ Voice Controls**: Volume, speed, voice selection, and play/pause controls
- **⌨️ Typing Animation**: Realistic message typing effects synchronized with voice
- **⏸️ Pause/Resume**: Users can pause tours and voice playback at any time
- **⏭️ Skip Steps**: Allow users to skip individual tour steps
- **🎯 Multiple CTAs**: Various call-to-action options after tour completion
- **⌨️ Keyboard Shortcuts**: ESC to close, accessibility-friendly

### Technical Features

- **Zero Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Modular Design**: Easy to integrate into existing projects
- **Configurable Tours**: JSON-based tour configuration
- **Performance Optimized**: Lightweight and fast-loading
- **Extensible**: Easy to add custom tour steps and functionality

## 🎨 Design System

- **Background**: Black (#000000)
- **Accent Color**: Neon Green (#25CC32)
- **Typography**: Modern system fonts
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

```
AI Product Demo Agent/
├── index.html              # Main demo page with product content
├── product-dashboard.html  # Dashboard demo page for cross-page navigation
├── styles.css              # Complete styling for demo page and AI assistant
├── ai-assistant.js         # Core AI assistant functionality
├── tour-config.js          # Main page tour steps configuration
├── dashboard-tour-config.js# Dashboard page tour steps configuration
├── voice-demo-script.js    # Natural conversation scripts and responses
├── voice-config.js         # ElevenLabs voice integration configuration
├── VOICE_SETUP.md         # Voice integration setup guide
└── README.md              # This documentation
```

## 🔧 Installation & Setup

### Quick Start (GitHub)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ai-product-demo-agent.git
   cd ai-product-demo-agent
   ```

2. **Set up your API key** (for voice features):

   ```bash
   # Copy the example config file
   cp config.local.js.example config.local.js

   # Edit config.local.js and add your actual ElevenLabs API key
   # The file is git-ignored for security
   ```

3. **Open index.html** in your web browser or serve locally:

   ```bash
   # Option 1: Open directly in browser
   open index.html

   # Option 2: Serve with Python
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

4. **Click the AI assistant button** (bottom-left corner) to start

### Direct Download

1. **Download** the project files
2. **Configure Voice** (optional): See configuration section below
3. **Open index.html** in your web browser
4. **Click the AI assistant button** (bottom-left corner) to start

## 🎮 Streamlined User Experience

### 🚀 **One-Click Demo Start**

- **Click AI Assistant**: Single click automatically starts the voice tour
- **Auto-Minimize**: Assistant minimizes to stay out of the way
- **Full Screen Demo**: Enjoy unobstructed view of product features
- **Easy Control**: Mini-controls for expand, pause, and stop

### 📱 **Smart Button Behavior**

- **First Click**: Starts tour and minimizes assistant
- **Second Click**: Expands assistant when minimized
- **Third Click**: Closes assistant completely
- **Visual Feedback**: Green glow indicates active tour state

### 🎯 **Optimized Mobile Experience**

- **Bottom Drawer**: Native mobile interface that doesn't block content
- **Touch-Friendly**: Proper touch target sizes and responsive design
- **Floating Pill**: Minimized state appears as elegant floating controls
- **Seamless Navigation**: All features work perfectly on mobile devices
- **Fixed Hero Display**: Hero section dashboard no longer skews on mobile
- **Dashboard Responsive**: Product dashboard page fully optimized for mobile

### Integration into Existing Projects

```html
<!-- Add to your HTML head -->
<link rel="stylesheet" href="path/to/styles.css" />

<!-- Add before closing body tag -->
<div id="ai-assistant" class="ai-assistant">
  <div class="assistant-button" id="assistantButton">
    <div class="assistant-avatar">
      <div class="avatar-face">🤖</div>
      <div class="pulse-ring"></div>
    </div>
  </div>

  <div class="assistant-overlay" id="assistantOverlay">
    <div class="assistant-header">
      <h3>AI Product Guide</h3>
      <button class="close-button" id="closeAssistant">×</button>
    </div>
    <div class="assistant-content">
      <div class="chat-messages" id="chatMessages"></div>
      <div class="assistant-controls">
        <button class="control-btn" id="startTour">Start Tour</button>
        <button class="control-btn" id="skipStep">Skip</button>
        <button class="control-btn" id="pauseTour">Pause</button>
      </div>
    </div>
  </div>
</div>

<div id="highlightOverlay" class="highlight-overlay"></div>

<script src="path/to/tour-config.js"></script>
<script src="path/to/voice-demo-script.js"></script>
<script src="path/to/voice-config.js"></script>
<script src="path/to/ai-assistant.js"></script>
```

## ⚙️ Configuration

### Tour Steps Configuration

Edit `tour-config.js` to customize tour steps:

```javascript
const TOUR_CONFIG = [
  {
    id: 1,
    selector: "#hero-section", // CSS selector for element to highlight
    action: "highlight", // Action: "highlight" or "scroll"
    scroll: true, // Whether to scroll to element
    say: "Welcome message...", // Message to display
    duration: 4000, // Duration in milliseconds
  },
  // Add more steps...
];
```

### Assistant Personality

Customize the assistant's personality in `tour-config.js`:

```javascript
const ASSISTANT_CONFIG = {
  name: "Alex",
  personality: "friendly",
  avatar: "🤖",
  welcomeMessage: "Hi there! I'm Alex...",
  // More configuration options...
};
```

## 🎯 Usage Examples

### Basic Tour

```javascript
// Start a tour programmatically
window.aiAssistant.startTour();

// Add custom tour step
window.aiAssistant.addCustomStep(
  "#my-element",
  "This is a special feature!",
  "highlight",
  3000
);
```

### Event Handling

```javascript
// Listen for tour completion
document.addEventListener("tourComplete", () => {
  console.log("Tour completed!");
  // Custom logic here
});
```

## 🔑 Environment Configuration

### API Key Setup

The application supports secure API key management through environment variables:

1. **Configure your API key** in `config.js`:

   ```javascript
   const CONFIG = {
     ELEVENLABS_API_KEY: "your_actual_api_key_here",
     // Other settings...
   };
   ```

2. **Get your ElevenLabs API key**:

   - Sign up at [ElevenLabs](https://elevenlabs.io)
   - Navigate to your account dashboard
   - Copy your API key

3. **Configure voice settings**:
   ```javascript
   const CONFIG = {
     DEFAULT_VOICE: "sarah", // Available: sarah, rachel, drew, paul, antoni, arnold, adam, sam
     DEFAULT_VOLUME: 0.8, // Volume level (0-1)
     DEFAULT_SPEED: 1.0, // Speech speed (0.5-2.0)
     VOICE_ENABLED: true, // Enable/disable voice features
     WEB_SPEECH_FALLBACK: true, // Use browser speech as fallback
     DEBUG_MODE: true, // Enable debug logging
   };
   ```

### Available Voice Characters

- **sarah** - Friendly Female (default and only voice for streamlined demo)

### Production Deployment

For production environments:

1. **Use environment variables** instead of hardcoded values
2. **Never commit API keys** to version control
3. **Use secure configuration management** systems
4. **Consider build-time variable injection** for frontend apps

### 🔐 Security & GitHub Best Practices

**API Key Security:**

- ✅ **Safe**: Use `config.local.js` for your actual API key (git-ignored)
- ✅ **Safe**: The main `config.js` only contains placeholder values
- ❌ **Unsafe**: Never commit real API keys to GitHub

**Local Development:**

```bash
# Create your local config (not tracked by git)
cp config.local.js.example config.local.js

# Edit config.local.js with your actual API key
# This file is automatically ignored by git
```

**File Structure:**

```
├── config.js              # ✅ Safe - Contains placeholders only
├── config.local.js         # ✅ Safe - Git-ignored, your actual keys
├── config.local.js.example # ✅ Safe - Template for local config
└── .gitignore             # ✅ Protects sensitive files
```

### Fallback Mode

If no API key is configured, the application automatically falls back to:

- **Web Speech API** for voice synthesis
- **Text-only mode** with all visual features intact
- **Graceful degradation** with user notifications

## 🎨 Customization

### Styling

Modify the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #25cc32;
  --background-color: #000000;
  --text-color: #ffffff;
  --accent-color: #1ea52a;
}
```

### Assistant Avatar

Change the avatar in `ai-assistant.js`:

```javascript
// In the HTML or dynamically
document.querySelector(".avatar-face").textContent = "👨‍💻";
```

### Position

Adjust the assistant position in `styles.css`:

```css
.ai-assistant {
  bottom: 20px;
  left: 20px; /* Change to 'right: 20px' for right positioning */
}
```

## 🔮 Voice Integration ✅

### Current Voice Features

- **✅ ElevenLabs Integration**: High-quality AI voice synthesis with 8 voice options
- **✅ Web Speech API Fallback**: Browser-native text-to-speech when API unavailable
- **✅ Voice Controls**: Play/pause, volume, speed, and voice selection
- **✅ Real-time Settings**: Adjust voice parameters on the fly

### Voice Setup

1. Get your ElevenLabs API key from [elevenlabs.io](https://elevenlabs.io)
2. Update `voice-config.js` with your API key
3. See `VOICE_SETUP.md` for detailed setup instructions

## 🔮 Future Enhancements

### Advanced Features

- **Voice Commands**: Voice-controlled tour navigation
- **Character Customization**: Multiple avatar options and personalities
- **Analytics Integration**: Track tour completion and user engagement
- **Multi-language Support**: Localized tours and voice synthesis
- **Custom Voice Training**: Brand-specific voice personalities
- **A/B Testing**: Different tour variations for optimization
- **Multi-language Support**: Internationalization capabilities

### Technical Improvements

- **Performance Monitoring**: Real-time performance metrics
- **Error Handling**: Enhanced error recovery and reporting
- **Accessibility**: WCAG compliance and screen reader support
- **Mobile Optimization**: Touch gestures and mobile-specific features

## 📱 Mobile Responsive

The assistant is fully responsive and adapts to different screen sizes:

- **Mobile**: Overlay expands to full width with touch-friendly controls
- **Tablet**: Optimized layout for medium screens
- **Desktop**: Full-featured experience with hover effects

## 🎪 Demo Content

The included demo showcases a typical SaaS product page with:

- **Hero Section**: Value proposition and CTA
- **Features Section**: Key product benefits
- **Interactive Demo**: Simulated product interface
- **Pricing Section**: Transparent pricing plans
- **Contact Section**: Multiple engagement options

## 📱 Mobile-Friendly Features

### Responsive Design

- **Mobile-First Approach**: Comprehensive responsive breakpoints for all device sizes
- **Touch-Optimized**: Enhanced touch interactions with proper touch target sizes (44px minimum)
- **Viewport Optimized**: Proper viewport meta tags for consistent mobile rendering
- **Performance Optimized**: Mobile-specific animation adjustments and performance enhancements

### Device Support

- **Small Mobile**: Up to 480px (optimized for phones)
- **Medium Mobile**: 481px to 768px (larger phones, small tablets)
- **Tablet Portrait**: 769px to 1024px (tablets in portrait mode)
- **Touch Detection**: Automatic detection and optimization for touch devices
- **High DPI Support**: Retina display optimizations for crisp visuals

### Mobile-Specific Features

- **Touch Indicators**: Visual tap indicators (👆) replace cursor on touch devices
- **Mobile Pulse Effects**: Enhanced pulse animations for touch interaction feedback
- **Optimized Animations**: Mobile-specific animation timing and complexity adjustments
- **Gesture Support**: Touch-friendly navigation and interaction patterns
- **Reduced Motion**: Simplified animations on smaller screens for better performance

### Navigation & Layout

- **Collapsible Navigation**: Mobile-friendly navigation menu system
- **Flexible Grid Layouts**: Responsive grid systems that adapt to screen size
- **Stacked Elements**: Automatic stacking of side-by-side elements on mobile
- **Optimized Spacing**: Mobile-appropriate padding and margins
- **Scroll Optimization**: Smooth scrolling and touch-friendly scroll behavior

### Assistant Features

- **Mobile-Optimized Assistant**: Floating assistant button sized for mobile interaction
- **Touch-Friendly Overlay**: Full-screen overlay with mobile-appropriate sizing
- **Adaptive Controls**: Control buttons that resize and reposition for mobile
- **Voice Features**: All voice features work seamlessly on mobile devices
- **Performance Optimized**: Efficient cursor and animation handling for mobile

### Animation System

- **Touch-Aware Animations**: Different animation sets for touch vs. mouse interactions
- **Performance Optimized**: Hardware acceleration and reduced complexity on mobile
- **Battery Friendly**: Optimized animation timing to preserve battery life
- **Gesture Feedback**: Visual feedback for touch interactions

### Technical Enhancements

- **Touch Event Handling**: Proper touch event management and prevention of hover states
- **Mobile Detection**: Automatic mobile and touch device detection
- **Performance Optimizations**: Mobile-specific performance improvements
- **Hardware Acceleration**: GPU-accelerated animations where beneficial
- **Memory Management**: Efficient cleanup of mobile-specific effects

### Cross-Platform Compatibility

- **iOS Optimization**: Safari-specific optimizations and touch handling
- **Android Compatibility**: Chrome mobile and Android browser support
- **Progressive Enhancement**: Graceful degradation for older mobile browsers
- **Accessibility**: Mobile screen reader and accessibility tool support

## 🚀 **Key Mobile UX Improvements**

### 📱 **Bottom Drawer Interface**

- **Native Mobile Feel**: Assistant overlay transforms into a bottom drawer on mobile devices
- **Screen Coverage**: Limited to 45-50% of viewport height, leaving demo content visible
- **Smooth Animations**: Slides up from bottom with proper mobile transitions
- **Visual Handle**: Drag indicator bar for familiar mobile interaction pattern

### 🎯 **Optimized Interaction Areas**

- **Touch Target Compliance**: All interactive elements meet 44px minimum (iOS standards)
- **Assistant Button**: Properly sized (50px) for comfortable mobile tapping
- **Compact Controls**: Grid layout for demo buttons maximizes space efficiency
- **Scrollable Content**: Assistant content scrolls within drawer when needed

### 🖼️ **Enhanced Hero Display**

- **Proportional Scaling**: Dashboard mockup scales appropriately for mobile screens
- **Optimized Sizing**: Different sizes for small mobile (280px) vs medium mobile (360px)
- **Centered Layout**: Proper alignment and spacing for mobile viewing
- **Touch-Friendly**: All interactive elements within hero section optimized for touch

### 🎭 **Visual Effects System**

- **Touch Indicators**: 👆 tap indicators replace cursor on touch devices
- **Mobile Pulse Effects**: Enhanced visual feedback specifically for touch interactions
- **Optimized Animations**: Reduced complexity and better performance on mobile
- **Battery Friendly**: Efficient animation timing preserves mobile battery life

### 🔧 **Technical Optimizations**

- **Hardware Acceleration**: GPU-accelerated animations for smooth mobile performance
- **Memory Management**: Efficient cleanup of mobile-specific effects and animations
- **Touch Detection**: Automatic detection and optimization for touch devices
- **Responsive Breakpoints**: Comprehensive coverage for all mobile device sizes

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the AI Product Demo Specialist.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or support, please refer to the documentation or create an issue in the project repository.

---

**Ready to create engaging product demos?** Start by opening `index.html` in your browser and clicking the AI assistant button! 🚀
