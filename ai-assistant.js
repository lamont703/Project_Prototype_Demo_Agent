// AI Assistant Main Script
class AIAssistant {
    constructor() {
        this.currentStep = 0;
        this.tourSteps = [];
        this.isActive = false;
        this.voiceEnabled = false;
        this.isVoiceSpeaking = false;
        this.voiceQueue = [];
        this.voiceManager = null;
        this.currentHighlight = null;
        this.currentHighlightedElement = null;
        this.currentZoomedElement = null;
        this.currentEffectedElement = null;
        this.currentDemo = null;
        this.demoCursor = null;
        this.cursorTrails = [];
        this.demoState = {
            isRunning: false,
            isPaused: false,
            currentStep: 0,
            totalSteps: 0
        };
        
        // Mobile detection and touch handling
        this.isMobile = this.detectMobile();
        this.isTouch = this.detectTouch();
        
        this.init();
    }

    // Mobile and touch detection methods
    detectMobile() {
        return window.innerWidth <= 768 || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    detectTouch() {
        return 'ontouchstart' in window || 
               navigator.maxTouchPoints > 0 || 
               navigator.msMaxTouchPoints > 0;
    }

    // Enhanced mobile event handling
    addMobileEventListener(element, event, handler) {
        if (this.isTouch) {
            // Add touch events for mobile devices
            switch(event) {
                case 'click':
                    element.addEventListener('touchstart', handler);
                    element.addEventListener('click', handler);
                    break;
                case 'hover':
                    element.addEventListener('touchstart', handler);
                    break;
                default:
                    element.addEventListener(event, handler);
            }
        } else {
            element.addEventListener(event, handler);
        }
    }

    init() {
        this.initializeElements();
        this.setupEventListeners();
        this.initializeVoice();
        this.loadTourConfig();
        this.createDemoCursor();
        console.log('AI Assistant initialized (Voice-Only Mode)');
    }

    initializeElements() {
        // Main elements
        this.assistantButton = document.getElementById('assistantButton');
        this.assistantOverlay = document.getElementById('assistantOverlay');
        this.closeButton = document.getElementById('closeButton');
        
        // Voice status elements
        this.voiceStatus = document.getElementById('voiceStatus');
        this.voiceTitle = document.getElementById('voiceTitle');
        this.voiceDescription = document.getElementById('voiceDescription');
        this.voiceFace = document.getElementById('voiceFace');
        this.voicePulse = document.getElementById('voicePulse');
        this.voiceWaves = document.querySelectorAll('.voice-wave');
        
        // Demo control buttons
        this.startVoiceTourBtn = document.getElementById('startVoiceTour');
        this.startVoiceDemoBtn = document.getElementById('startVoiceDemo');
        this.dashboardDemoBtn = document.getElementById('dashboardDemo');
        this.voiceQABtn = document.getElementById('voiceQA');
        
        // Voice control buttons
        this.voiceToggleBtn = document.getElementById('voiceToggle');
        this.pauseVoiceBtn = document.getElementById('pauseVoice');
        this.stopVoiceBtn = document.getElementById('stopVoice');
        this.voiceSettingsBtn = document.getElementById('voiceSettings');
        
        // Voice settings
        this.voiceSettingsPanel = document.getElementById('voiceSettingsPanel');
        this.voiceSelect = document.getElementById('voiceSelect');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.volumeValue = document.getElementById('volumeValue');
        this.speedSlider = document.getElementById('speedSlider');
        this.speedValue = document.getElementById('speedValue');
        this.testVoiceBtn = document.getElementById('testVoice');
        
        // Minimized controls
        this.miniExpandBtn = document.getElementById('miniExpandBtn');
        this.miniPauseBtn = document.getElementById('miniPauseBtn');
        this.miniStopBtn = document.getElementById('miniStopBtn');
    }

    setupEventListeners() {
        if (this.assistantButton) {
            this.addMobileEventListener(this.assistantButton, 'click', () => this.toggleAssistant());
        }
        
        if (this.closeButton) {
            this.addMobileEventListener(this.closeButton, 'click', () => this.closeAssistant());
        }
        
        // Demo control event listeners
        if (this.startVoiceTourBtn) {
            this.addMobileEventListener(this.startVoiceTourBtn, 'click', () => this.startVoiceTour());
        }
        
        if (this.startVoiceDemoBtn) {
            this.addMobileEventListener(this.startVoiceDemoBtn, 'click', () => this.startVoiceDemo());
        }
        
        if (this.dashboardDemoBtn) {
            this.addMobileEventListener(this.dashboardDemoBtn, 'click', () => this.startDashboardDemo());
        }
        
        if (this.voiceQABtn) {
            this.addMobileEventListener(this.voiceQABtn, 'click', () => this.startVoiceQA());
        }
        
        // Voice control event listeners
        if (this.voiceToggleBtn) {
            this.addMobileEventListener(this.voiceToggleBtn, 'click', () => this.toggleVoice());
        }
        
        if (this.pauseVoiceBtn) {
            this.addMobileEventListener(this.pauseVoiceBtn, 'click', () => this.pauseVoice());
        }
        
        if (this.stopVoiceBtn) {
            this.addMobileEventListener(this.stopVoiceBtn, 'click', () => this.stopVoice());
        }
        
        if (this.voiceSettingsBtn) {
            this.addMobileEventListener(this.voiceSettingsBtn, 'click', () => this.toggleVoiceSettings());
        }
        
        if (this.testVoiceBtn) {
            this.addMobileEventListener(this.testVoiceBtn, 'click', () => this.testVoice());
        }
        
        // Voice settings event listeners
        if (this.voiceSelect) {
            this.voiceSelect.addEventListener('change', (e) => this.changeVoice(e.target.value));
        }
        
        if (this.volumeSlider) {
            this.volumeSlider.addEventListener('input', (e) => this.changeVolume(e.target.value));
        }
        
        if (this.speedSlider) {
            this.speedSlider.addEventListener('input', (e) => this.changeSpeed(e.target.value));
        }
        
        // Minimized control event listeners
        if (this.miniExpandBtn) {
            this.addMobileEventListener(this.miniExpandBtn, 'click', () => this.expandAssistant());
        }
        
        if (this.miniPauseBtn) {
            this.addMobileEventListener(this.miniPauseBtn, 'click', () => this.pauseVoice());
        }
        
        if (this.miniStopBtn) {
            this.addMobileEventListener(this.miniStopBtn, 'click', () => this.stopVoice());
        }
        
        // Close settings when clicking outside
        document.addEventListener('click', (e) => {
            if (this.voiceSettingsPanel && !this.voiceSettingsPanel.contains(e.target) && 
                !this.voiceSettingsBtn.contains(e.target)) {
                this.voiceSettingsPanel.classList.remove('active');
            }
        });
    }

    async initializeVoice() {
        try {
            if (typeof VoiceManager !== 'undefined') {
                this.voiceManager = new VoiceManager();
                
                // Check if voice manager is properly enabled
                if (this.voiceManager.isVoiceEnabled()) {
                    this.voiceEnabled = true;
                    this.updateVoiceStatus('Voice AI Ready', 'Ready to provide voice-guided demos');
                    console.log('Voice AI initialized successfully');
                    
                    // Mobile-specific initialization
                    if (this.isMobile) {
                        console.log('📱 Mobile device detected - initializing mobile voice features');
                        this.initializeMobileVoice();
                    }
                } else {
                    this.voiceEnabled = false;
                    this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
                    console.warn('VoiceManager created but voice features are disabled');
                }
            } else {
                console.warn('VoiceManager not found, voice features disabled');
                this.voiceEnabled = false;
                this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            }
        } catch (error) {
            console.error('Error initializing voice:', error);
            this.voiceEnabled = false;
            this.updateVoiceStatus('Voice Error', 'Voice initialization failed');
        }
    }
    
    initializeMobileVoice() {
        // For mobile devices, especially iOS, we need to handle audio differently
        if (this.isMobile && this.voiceManager) {
            // Ensure audio context is initialized on first user interaction
            const initMobileAudio = () => {
                console.log('📱 Initializing mobile audio context');
                
                // Test if Web Speech API is available
                if ('speechSynthesis' in window) {
                    console.log('🎙️ Web Speech API available on mobile');
                    
                    // Pre-load voices for better mobile experience
                    const loadVoices = () => {
                        const voices = speechSynthesis.getVoices();
                        console.log(`🎙️ Found ${voices.length} voices on mobile:`, voices.map(v => v.name));
                    };
                    
                    if (speechSynthesis.getVoices().length > 0) {
                        loadVoices();
                    } else {
                        speechSynthesis.addEventListener('voiceschanged', loadVoices);
                    }
                } else {
                    console.warn('📱 Web Speech API not available on this mobile device');
                }
            };
            
            // Initialize on first touch/click
            if (this.isTouch) {
                const firstTouch = () => {
                    initMobileAudio();
                    document.removeEventListener('touchstart', firstTouch);
                    document.removeEventListener('click', firstTouch);
                };
                
                document.addEventListener('touchstart', firstTouch, { once: true });
                document.addEventListener('click', firstTouch, { once: true });
            } else {
                initMobileAudio();
            }
        }
    }

    async loadTourConfig() {
        try {
            if (typeof TOUR_CONFIG !== 'undefined') {
                this.tourSteps = Array.isArray(TOUR_CONFIG) ? TOUR_CONFIG : (TOUR_CONFIG.steps || []);
                console.log('Tour config loaded:', this.tourSteps.length, 'steps');
            } else {
                console.warn('TOUR_CONFIG not found');
            }
        } catch (error) {
            console.error('Error loading tour config:', error);
        }
    }

    async toggleAssistant() {
        if (this.assistantOverlay) {
            // If already active and minimized, expand it
            if (this.isActive && this.assistantOverlay.classList.contains('minimized')) {
                this.expandAssistant();
                return;
            }
            
            // If already active and expanded, close it
            if (this.isActive && !this.assistantOverlay.classList.contains('minimized')) {
                this.closeAssistant();
                return;
            }
            
            // If not active, show the demo options (like other start buttons)
            this.isActive = true;
            
            // Show overlay with demo options
            console.log('🚀 Opening AI assistant with demo options');
            this.updateVoiceStatus('AI Assistant Ready', 'Choose your experience below');
            this.setVoiceFace('🤖');
            
            // Show overlay
            this.assistantOverlay.classList.add('active');
        }
    }

    async startOnboardingTour() {
        // Special method for onboarding system to auto-start tour
        if (this.assistantOverlay) {
            // If already active and minimized, expand it
            if (this.isActive && this.assistantOverlay.classList.contains('minimized')) {
                this.expandAssistant();
                return;
            }
            
            // If already active and expanded, close it
            if (this.isActive && !this.assistantOverlay.classList.contains('minimized')) {
                this.closeAssistant();
                return;
            }
            
            // If not active, start the tour directly
            this.isActive = true;
            
            // Auto-start the voice tour and minimize immediately
            console.log('🚀 Auto-starting voice tour from onboarding');
            this.updateVoiceStatus('Starting Tour...', 'Get ready for an amazing demo experience!');
            this.setVoiceFace('🎯');
            
            // Show overlay briefly, then minimize
            this.assistantOverlay.classList.add('active');
            await this.wait(800); // Brief moment to show it's starting
            
            // Start the tour
            this.startVoiceTour();
            
            // Minimize after starting
            setTimeout(() => {
                this.minimizeAssistant();
            }, 1500);
        }
    }

    minimizeAssistant() {
        if (this.assistantOverlay) {
            this.assistantOverlay.classList.add('minimized');
            
            // Update button visual state
            if (this.assistantButton) {
                this.assistantButton.classList.add('active-minimized');
            }
            
            console.log('📱 Assistant minimized for optimal viewing');
        }
    }

    // Helper method to ensure assistant minimizes for any demo start
    autoMinimizeForDemo(delay = 1500) {
        if (this.assistantOverlay && this.assistantOverlay.classList.contains('active')) {
            setTimeout(() => {
                if (!this.assistantOverlay.classList.contains('minimized')) {
                    this.minimizeAssistant();
                }
            }, delay);
        }
    }

    expandAssistant() {
        if (this.assistantOverlay) {
            this.assistantOverlay.classList.remove('minimized');
            
            // Update button visual state
            if (this.assistantButton) {
                this.assistantButton.classList.remove('active-minimized');
            }
            
            // Update status for expanded view
            if (!this.demoState.isRunning) {
                this.updateVoiceStatus('AI Assistant Active', 'Choose your next experience below');
                this.setVoiceFace('🤖');
            }
            
            console.log('📱 Assistant expanded from minimized state');
        }
    }

    closeAssistant() {
        if (this.assistantOverlay) {
            this.assistantOverlay.classList.remove('active');
            this.assistantOverlay.classList.remove('minimized');
            
            // Update button visual state
            if (this.assistantButton) {
                this.assistantButton.classList.remove('active-minimized');
            }
            
            this.isActive = false;
            this.stopAllVoice();
        }
    }

    // Voice Tour Functions
    async startVoiceTour() {
        if (!this.voiceEnabled) {
            this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            return;
        }

        this.currentDemo = 'tour';
        this.demoState.isRunning = true;
        this.demoState.currentStep = 0;
        this.demoState.totalSteps = this.tourSteps.length;
        
        this.updateVoiceStatus('Starting Jahmal\'s Comedy Tour', 'Get ready for entertainment!');
        this.setVoiceFace('🎭');
        
        // Show the demo cursor
        this.showDemoCursor();
        
        await this.speak("Yo, what's up! Welcome to Jahmal's Comedy Product Tour! I'm about to take you on the most entertaining journey through our platform. Think of this as a guided tour, but with actual personality and way more laughs. Ready to have some fun while learning about amazing features?");
        
        // Minimize assistant for unobstructed demo viewing
        setTimeout(() => {
            this.minimizeAssistant();
        }, 2000);
        
        setTimeout(() => {
            this.runTourStep(0);
        }, 1000);
    }

    async runTourStep(stepIndex) {
        if (!this.tourSteps[stepIndex] || !this.demoState.isRunning) return;
        
        const step = this.tourSteps[stepIndex];
        this.currentStep = stepIndex;
        
        console.log(`🎯 Running tour step ${stepIndex + 1}:`, step);
        
        // Update voice status
        this.updateVoiceStatus(
            `Tour Step ${stepIndex + 1}/${this.tourSteps.length}`,
            step.title || `Step ${stepIndex + 1}: ${step.action || 'Exploring feature...'}`
        );
        
        // Get element selector (handle both 'element' and 'selector' properties)
        const elementSelector = step.element || step.selector;
        console.log(`🎯 Element selector: ${elementSelector}`);
        
        // Handle different actions
        if (step.action === 'navigate' && step.navigationUrl) {
            // Navigate to another page
            await this.speak(step.say || step.content || 'Navigating to next section...');
            await this.navigateToPage(step.navigationUrl);
            return;
        }
        
        // Apply visual effects BEFORE speaking (so they appear immediately)
        if (elementSelector) {
            const targetElement = document.querySelector(elementSelector);
            console.log(`🎯 Target element found:`, targetElement);
            
            if (targetElement) {
                // Move cursor to element first
                console.log(`🖱️ Moving cursor to element: ${elementSelector}`);
                const cursorOptions = {
                    duration: 1200,
                    click: step.action === 'zoom' || step.action === 'highlight',
                    ...step.cursor // Allow step-specific cursor options
                };
                await this.moveCursorToElement(elementSelector, cursorOptions);
                
                // Scroll to element if specified
                if (step.scroll) {
                    console.log(`🎯 Scrolling to element: ${elementSelector}`);
                    this.scrollToElement(elementSelector);
                }
                
                // Apply visual effects based on action
                switch (step.action) {
                    case 'highlight':
                        console.log(`🎯 Highlighting element: ${elementSelector}`);
                        this.highlightElement(elementSelector);
                        break;
                    case 'zoom':
                        console.log(`🎯 Zooming element: ${elementSelector}`);
                        this.zoomElement(elementSelector, step.zoomLevel || 1.2);
                        break;
                    case 'scroll':
                        console.log(`🎯 Scrolling to element: ${elementSelector}`);
                        this.scrollToElement(elementSelector);
                        break;
                    default:
                        console.log(`🎯 Default highlighting element: ${elementSelector}`);
                        this.highlightElement(elementSelector);
                        break;
                }
                
                // Apply enhanced visual effects (with slight delay for smooth appearance)
                setTimeout(() => {
                    if (step.effects) {
                        console.log(`✨ Applying enhanced effects:`, step.effects);
                        this.applyVisualEffects(elementSelector, step.effects);
                    } else {
                        // Apply default glow effect if no specific effects defined
                        this.applyVisualEffects(elementSelector, { glow: true });
                    }
                }, 200);
            } else {
                console.warn(`🎯 Element not found: ${elementSelector}`);
            }
        }
        
        // Small delay to let visual effects appear before speaking
        await this.wait(300);
        
        // Speak the step content
        const speechPromise = this.speak(step.say || step.content || 'Moving to next step...');
        
        // Wait for speech to complete, then wait additional time for effect visibility
        await speechPromise;
        await this.wait(1000); // Keep effects visible for 1 second after speech
        
        // Clear effects and move to next step
        this.clearHighlight();
        this.clearZoom();
        this.clearVisualEffects();
        
        if (stepIndex < this.tourSteps.length - 1) {
            this.runTourStep(stepIndex + 1);
        } else {
            this.completeTour();
        }
    }

    async completeTour() {
        this.demoState.isRunning = false;
        this.clearHighlight();
        this.clearZoom();
        this.clearVisualEffects();
        this.hideDemoCursor();
        this.clearCursorTrails();
        
        this.updateVoiceStatus('Comedy Tour Complete!', 'That was entertaining AF!');
        this.setVoiceFace('🎉');
        
        // Keep the assistant minimized for a clean completion
        if (this.assistantOverlay && this.assistantOverlay.classList.contains('minimized')) {
            await this.speak("And THAT, my friend, is how we do product demos in 2025! *mic drop* You just experienced the most entertaining product tour ever created. I hope you had as much fun as I did! Tap me if you want to explore more features or have questions!");
            
            setTimeout(() => {
                this.updateVoiceStatus('Jahmal\'s Ready for More!', 'That was just the warm-up!');
                this.setVoiceFace('🎭');
            }, 3000);
        } else {
            await this.speak("Congratulations! You just completed Jahmal's Comedy Product Tour! *applause* That was way more fun than your average demo, right? Want to explore more features, ask me questions, or just chat about how awesome this platform is?");
            
            setTimeout(() => {
                this.updateVoiceStatus('Comedy Master Ready', 'Choose another experience or ask anything!');
                this.setVoiceFace('🎤');
            }, 3000);
        }
    }

    // Voice Demo Functions
    async startVoiceDemo() {
        if (!this.voiceEnabled) {
            this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            return;
        }

        this.currentDemo = 'demo';
        this.demoState.isRunning = true;
        this.updateVoiceStatus('Jahmal\'s Comedy Demo Active', 'Get ready for entertainment!');
        this.setVoiceFace('🎭');
        
        // Show the demo cursor
        this.showDemoCursor();
        
        // Minimize assistant for unobstructed demo viewing
        setTimeout(() => {
            this.minimizeAssistant();
        }, 1500);
        
        try {
            if (typeof VOICE_DEMO_SCRIPT !== 'undefined') {
                // Create comedy conversation flow from Jahmal's scripts
                const comedyConversation = [
                    {
                        title: "Jahmal's Comedy Welcome",
                        content: VOICE_DEMO_SCRIPT.welcome.greeting,
                        highlight: ".hero",
                        pause: 1000
                    },
                    {
                        title: "Hero Section Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.heroSection.primary,
                        highlight: ".hero-content",
                        pause: 800
                    },
                    {
                        title: "CTA Button Humor",
                        content: VOICE_DEMO_SCRIPT.demoFlow.heroSection.callToAction,
                        highlight: ".cta-button",
                        pause: 1200
                    },
                    {
                        title: "Features Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.featuresSection.transition,
                        highlight: "#features",
                        pause: 1000
                    },
                    {
                        title: "Performance Feature Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.featuresSection.performanceFeature,
                        highlight: ".feature-card:first-child",
                        pause: 1500
                    },
                    {
                        title: "AI Feature Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.featuresSection.aiPoweredFeature,
                        highlight: ".feature-card:nth-child(2)",
                        pause: 1200
                    },
                    {
                        title: "Security Feature Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.featuresSection.securityFeature,
                        highlight: ".feature-card:last-child",
                        pause: 1000
                    },
                    {
                        title: "Demo Section Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.demoSection.introduction,
                        highlight: "#demo-section",
                        pause: 800
                    },
                    {
                        title: "Interactive Demo Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.demoSection.interactiveElement,
                        highlight: ".demo-interface",
                        pause: 1200
                    },
                    {
                        title: "Pricing Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.pricingSection.transparency,
                        highlight: "#pricing",
                        pause: 1000
                    },
                    {
                        title: "Professional Plan Comedy",
                        content: VOICE_DEMO_SCRIPT.demoFlow.pricingSection.professionalPlan,
                        highlight: ".pricing-card.featured",
                        pause: 1500
                    },
                    {
                        title: "Comedy Closing",
                        content: VOICE_DEMO_SCRIPT.closing.valueProposition,
                        highlight: "#contact",
                        pause: 1000
                    }
                ];
                
                await this.runVoiceDemo(comedyConversation);
            } else {
                await this.speak("Yo, what's up! I'm Jahmal, and I'm about to show you the most entertaining product demo you've ever seen!");
            }
        } catch (error) {
            console.error('Error starting Jahmal\'s comedy demo:', error);
            await this.speak("Hey there! I'm Jahmal, your comedy AI assistant, and I'm ready to make this demo way more fun than your average presentation!");
        }
    }

    async runVoiceDemo(script) {
        if (!script || !script.length) return;
        
        for (let i = 0; i < script.length && this.demoState.isRunning; i++) {
            const segment = script[i];
            
            this.updateVoiceStatus(`Demo ${i + 1}/${script.length}`, segment.title || 'Presenting...');
            
            if (segment.highlight) {
                // Move cursor to element and highlight it
                await this.moveCursorToElement(segment.highlight, {
                    duration: 1000,
                    click: true
                });
                this.highlightElement(segment.highlight);
            }
            
            await this.speak(segment.content);
            
            if (segment.pause) {
                await this.wait(segment.pause);
            }
            
            this.clearHighlight();
            this.clearVisualEffects();
        }
        
        this.hideDemoCursor();
        this.clearCursorTrails();
        this.updateVoiceStatus('Demo Complete', 'Ready for questions');
        this.setVoiceFace('🤖');
        
        // Keep assistant minimized after demo completion
        setTimeout(() => {
            if (!this.assistantOverlay.classList.contains('minimized')) {
                this.minimizeAssistant();
            }
        }, 2000);
    }

    // Dashboard Demo
    async startDashboardDemo() {
        if (!this.voiceEnabled) {
            this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            return;
        }

        this.currentDemo = 'dashboard';
        this.demoState.isRunning = true;
        this.updateVoiceStatus('Jahmal\'s Funny Dashboard Demo', 'Dashboard comedy incoming!');
        this.setVoiceFace('😂');
        
        // Show the demo cursor
        this.showDemoCursor();
        
        // Minimize assistant for unobstructed demo viewing
        setTimeout(() => {
            this.minimizeAssistant();
        }, 1500);
        
        await this.speak("Alright, let me show you something that's gonna make you say 'wow' out loud! I'm taking you to our actual dashboard interface. This is where the magic happens on a day-to-day basis, where the rubber meets the road, where... okay, I'll stop with the metaphors! Let's check out this beautiful dashboard!");
        
        // Navigate to dashboard page
        if (this.shouldNavigateToPage('product-dashboard.html')) {
            await this.navigateToPage('product-dashboard.html');
        }
    }

    // Voice Q&A
    async startVoiceQA() {
        if (!this.voiceEnabled) {
            this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            return;
        }

        this.currentDemo = 'qa';
        this.updateVoiceStatus('Jahmal\'s Comedy Q&A', 'Ask me anything - I\'ve got jokes!');
        this.setVoiceFace('🤔');
        
        // Minimize assistant for focused Q&A experience
        setTimeout(() => {
            this.minimizeAssistant();
        }, 2500);
        
        await this.speak("Yo, I'm ready to answer your questions! And trust me, I'm way more fun than those boring FAQ pages. You can ask me about pricing, features, integrations, security, or literally anything else about our product. I promise to keep it entertaining while being helpful!");
        
        // Show common questions
        setTimeout(() => {
            this.updateVoiceStatus('Comedy Q&A Ready', 'Try: "What about pricing?" or "How secure is it?" I\'ve got hilarious answers!');
        }, 2000);
    }

    // Voice Control Functions
    toggleVoice() {
        this.voiceEnabled = !this.voiceEnabled;
        
        if (this.voiceToggleBtn) {
            this.voiceToggleBtn.textContent = this.voiceEnabled ? '🔊 Voice On' : '🔇 Voice Off';
            this.voiceToggleBtn.classList.toggle('active', this.voiceEnabled);
        }
        
        if (!this.voiceEnabled) {
            this.stopAllVoice();
            this.updateVoiceStatus('Voice Disabled', 'Voice features are turned off');
        } else {
            this.updateVoiceStatus('Voice Enabled', 'Voice features are ready');
        }
    }

    pauseVoice() {
        if (this.voiceManager) {
            this.voiceManager.pause();
            this.isVoiceSpeaking = false;
            this.updateVoiceIndicator(false);
            this.updateVoiceStatus('Voice Paused', 'Voice playback is paused');
        }
    }

    stopVoice() {
        this.stopAllVoice();
        this.demoState.isRunning = false;
        this.updateVoiceStatus('Voice Stopped', 'All voice activities stopped');
    }

    stopAllVoice() {
        if (this.voiceManager) {
            this.voiceManager.stop();
        }
        this.isVoiceSpeaking = false;
        this.voiceQueue = [];
        this.updateVoiceIndicator(false);
        this.clearHighlight();
        this.clearZoom();
        this.clearVisualEffects();
        this.hideDemoCursor();
        this.clearCursorTrails();
        this.demoState.isRunning = false;
        
        // Keep assistant minimized when stopping demos
        if (this.assistantOverlay && this.assistantOverlay.classList.contains('active')) {
            setTimeout(() => {
                if (!this.assistantOverlay.classList.contains('minimized')) {
                    this.minimizeAssistant();
                }
            }, 1000);
        }
    }

    toggleVoiceSettings() {
        if (this.voiceSettingsPanel) {
            this.voiceSettingsPanel.classList.toggle('active');
        }
    }

    changeVoice(voiceId) {
        if (this.voiceManager) {
            this.voiceManager.setVoice(voiceId);
            console.log('Voice changed to:', voiceId);
        }
    }

    changeVolume(volume) {
        if (this.volumeValue) {
            this.volumeValue.textContent = volume + '%';
        }
        if (this.voiceManager) {
            this.voiceManager.setVolume(volume / 100);
        }
    }

    changeSpeed(speed) {
        if (this.speedValue) {
            this.speedValue.textContent = speed + 'x';
        }
        if (this.voiceManager) {
            this.voiceManager.setSpeed(parseFloat(speed));
        }
    }

    async testVoice() {
        if (!this.voiceEnabled) {
            this.updateVoiceStatus('Voice Unavailable', 'Voice features are not available');
            return;
        }

        this.updateVoiceStatus('Testing Jahmal\'s Comedy Voice', 'Sample comedy performance!');
        this.setVoiceFace('🎤');
        
        // Use a comedy test script
        const comedyTest = "Hey there! This is Jahmal testing the voice quality, and I gotta say, I sound pretty amazing! *chuckles* This is what you'll hear during all our demos - natural, engaging, and way more fun than your average AI assistant. How's the sound quality? Pretty impressive, right?";
        
        await this.speak(comedyTest);
        
        setTimeout(() => {
            this.updateVoiceStatus('Comedy Voice Test Complete', 'Sounding good, right?');
            this.setVoiceFace('🎭');
        }, 2000);
    }

    // Core Voice Functions
    async speak(text) {
        if (!this.voiceEnabled || !this.voiceManager) {
            console.log('Voice disabled or unavailable:', text);
            return;
        }

        this.isVoiceSpeaking = true;
        this.updateVoiceIndicator(true);
        
        try {
            await this.voiceManager.speak(text);
        } catch (error) {
            console.error('Error speaking:', error);
        } finally {
            this.isVoiceSpeaking = false;
            this.updateVoiceIndicator(false);
        }
    }

    // Visual Feedback Functions
    updateVoiceStatus(title, description) {
        if (this.voiceTitle) {
            this.voiceTitle.textContent = title;
        }
        if (this.voiceDescription) {
            this.voiceDescription.textContent = description;
        }
    }

    setVoiceFace(emoji) {
        if (this.voiceFace) {
            this.voiceFace.textContent = emoji;
        }
    }

    updateVoiceIndicator(speaking) {
        if (this.voicePulse) {
            this.voicePulse.classList.toggle('speaking', speaking);
        }
        
        this.voiceWaves.forEach((wave, index) => {
            if (speaking) {
                setTimeout(() => {
                    wave.classList.add('active');
                }, index * 100);
            } else {
                wave.classList.remove('active');
            }
        });
    }

    // Navigation and Highlighting Functions
    highlightElement(selector) {
        console.log(`✨ Highlighting element: ${selector}`);
        this.clearHighlight();
        
        const element = document.querySelector(selector);
        if (element) {
            console.log(`✨ Element found for highlighting:`, element);
            
            // Add a class to the element itself for styling
            element.classList.add('tour-highlighted');
            
            // Create overlay highlight box
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            console.log(`✨ Element rect:`, rect);
            console.log(`✨ Scroll position: top=${scrollTop}, left=${scrollLeft}`);
            
            const highlight = document.createElement('div');
            highlight.className = 'highlight-overlay';
            highlight.style.cssText = `
                position: absolute;
                top: ${rect.top + scrollTop - 8}px;
                left: ${rect.left + scrollLeft - 8}px;
                width: ${rect.width + 16}px;
                height: ${rect.height + 16}px;
                border: 3px solid #25CC32;
                border-radius: 12px;
                box-shadow: 0 0 30px rgba(37, 204, 50, 0.6), inset 0 0 30px rgba(37, 204, 50, 0.1);
                pointer-events: none;
                z-index: 10000;
                animation: highlightPulse 2s ease-in-out infinite;
                background: rgba(37, 204, 50, 0.05);
            `;
            
            document.body.appendChild(highlight);
            this.currentHighlight = highlight;
            this.currentHighlightedElement = element;
            
            console.log(`✨ Highlight overlay created and added to DOM`);
        } else {
            console.warn(`✨ Element not found for selector: ${selector}`);
        }
    }

    clearHighlight() {
        if (this.currentHighlight) {
            this.currentHighlight.remove();
            this.currentHighlight = null;
        }
        
        if (this.currentHighlightedElement) {
            this.currentHighlightedElement.classList.remove('tour-highlighted');
            this.currentHighlightedElement = null;
        }
        
        // Clear any other highlighted elements
        const highlightedElements = document.querySelectorAll('.tour-highlighted');
        highlightedElements.forEach(el => {
            el.classList.remove('tour-highlighted');
        });
    }

    scrollToElement(selector) {
        console.log(`🔄 Scrolling to element: ${selector}`);
        const element = document.querySelector(selector);
        if (element) {
            console.log(`🔄 Element found for scrolling:`, element);
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            console.log(`🔄 Scroll initiated`);
        } else {
            console.warn(`🔄 Element not found for scrolling: ${selector}`);
        }
    }

    zoomElement(selector, zoomLevel = 1.2) {
        console.log(`🔍 Zooming element: ${selector} at level ${zoomLevel}`);
        const element = document.querySelector(selector);
        if (element) {
            console.log(`🔍 Element found for zooming:`, element);
            element.classList.add('zoomed-element');
            element.style.transform = `scale(${zoomLevel})`;
            element.style.transition = 'transform 0.5s ease';
            element.style.zIndex = '1000';
            element.style.position = 'relative';
            element.style.boxShadow = '0 8px 32px rgba(37, 204, 50, 0.3)';
            
            this.currentZoomedElement = element;
            console.log(`🔍 Element zoomed successfully`);
        } else {
            console.warn(`🔍 Element not found for zooming: ${selector}`);
        }
    }
    
    clearZoom() {
        if (this.currentZoomedElement) {
            this.currentZoomedElement.classList.remove('zoomed-element');
            this.currentZoomedElement.style.transform = '';
            this.currentZoomedElement.style.zIndex = '';
            this.currentZoomedElement.style.boxShadow = '';
            this.currentZoomedElement = null;
        }
        
        // Clear any other zoomed elements
        const zoomedElements = document.querySelectorAll('.zoomed-element');
        zoomedElements.forEach(el => {
            el.classList.remove('zoomed-element');
            el.style.transform = '';
            el.style.zIndex = '';
            el.style.boxShadow = '';
        });
    }

    shouldNavigateToPage(page) {
        return window.location.pathname.indexOf(page) === -1;
    }

    async navigateToPage(page) {
        if (this.shouldNavigateToPage(page)) {
            this.updateVoiceStatus('Navigating...', `Going to ${page}`);
            
            await this.speak(`Navigating to ${page.replace('.html', '').replace('-', ' ')}...`);
            
            setTimeout(() => {
                window.location.href = page;
            }, 1000);
        }
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Demo Cursor Functions
    createDemoCursor() {
        // Only create cursor for non-touch devices
        if (!this.isTouch) {
            this.demoCursor = document.createElement('div');
            this.demoCursor.className = 'demo-cursor';
            this.demoCursor.innerHTML = '<div class="demo-cursor-pointer"></div>';
            document.body.appendChild(this.demoCursor);
            console.log('🖱️ Demo cursor created for non-touch device');
        } else {
            console.log('🖱️ Demo cursor disabled for touch device');
        }
    }

    showDemoCursor() {
        if (this.demoCursor && !this.isTouch) {
            this.demoCursor.classList.add('active');
            console.log('🖱️ Demo cursor shown');
        } else if (this.isTouch) {
            console.log('🖱️ Demo cursor disabled on touch device');
        }
    }

    hideDemoCursor() {
        if (this.demoCursor && !this.isTouch) {
            this.demoCursor.classList.remove('active');
            console.log('🖱️ Demo cursor hidden');
        }
    }

    async moveCursorToElement(selector, options = {}) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`🖱️ Cannot move cursor - element not found: ${selector}`);
            return;
        }

        // On touch devices, use a mobile-friendly indicator instead of cursor
        if (this.isTouch) {
            console.log(`📱 Using mobile indicator for ${selector}`);
            this.showMobileIndicator(element, options);
            return;
        }

        // Regular cursor movement for non-touch devices
        if (!this.demoCursor) {
            console.warn(`🖱️ Cannot move cursor - cursor not initialized`);
            return;
        }

        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // Calculate target position (center of element by default)
        const targetX = rect.left + scrollLeft + (rect.width * (options.offsetX || 0.5));
        const targetY = rect.top + scrollTop + (rect.height * (options.offsetY || 0.5));

        console.log(`🖱️ Moving cursor to ${selector} at (${targetX}, ${targetY})`);

        // Show cursor if not visible
        this.showDemoCursor();

        // Create trail effect
        this.createCursorTrail();

        // Move cursor smoothly
        this.demoCursor.style.left = targetX + 'px';
        this.demoCursor.style.top = targetY + 'px';

        // Wait for movement to complete
        await this.wait(options.duration || 1500);

        // Add click animation if requested
        if (options.click) {
            await this.animateCursorClick();
        }
    }

    // Mobile-specific indicator for touch devices
    showMobileIndicator(element, options = {}) {
        // Add a mobile-specific pulse effect
        element.classList.add('mobile-highlight-pulse');
        
        // Show a brief tap indicator
        const tapIndicator = document.createElement('div');
        tapIndicator.className = 'mobile-tap-indicator';
        tapIndicator.innerHTML = '👆';
        tapIndicator.style.position = 'absolute';
        tapIndicator.style.fontSize = '2rem';
        tapIndicator.style.zIndex = '10003';
        tapIndicator.style.pointerEvents = 'none';
        tapIndicator.style.animation = 'mobileTapAnimation 2s ease-out';
        
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        tapIndicator.style.left = (rect.left + scrollLeft + rect.width / 2 - 16) + 'px';
        tapIndicator.style.top = (rect.top + scrollTop - 40) + 'px';
        
        document.body.appendChild(tapIndicator);
        
        // Remove indicator after animation
        setTimeout(() => {
            element.classList.remove('mobile-highlight-pulse');
            if (tapIndicator.parentNode) {
                tapIndicator.parentNode.removeChild(tapIndicator);
            }
        }, 2000);
    }

    async animateCursorClick() {
        if (!this.demoCursor) return;

        this.demoCursor.classList.add('clicking');
        await this.wait(300);
        this.demoCursor.classList.remove('clicking');
        
        console.log('🖱️ Cursor click animation completed');
    }

    createCursorTrail() {
        if (!this.demoCursor) return;

        const currentRect = this.demoCursor.getBoundingClientRect();
        const trail = document.createElement('div');
        trail.className = 'demo-cursor-trail';
        trail.style.left = (currentRect.left + currentRect.width / 2) + 'px';
        trail.style.top = (currentRect.top + currentRect.height / 2) + 'px';
        trail.style.opacity = '1';

        document.body.appendChild(trail);
        this.cursorTrails.push(trail);

        // Fade out and remove trail
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
                const index = this.cursorTrails.indexOf(trail);
                if (index > -1) {
                    this.cursorTrails.splice(index, 1);
                }
            }, 300);
        }, 100);

        // Limit number of trails
        if (this.cursorTrails.length > 5) {
            const oldTrail = this.cursorTrails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    }

    clearCursorTrails() {
        this.cursorTrails.forEach(trail => {
            if (trail && trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        });
        this.cursorTrails = [];
    }

    // Enhanced Visual Effects System
    applyVisualEffects(selector, effects) {
        const element = document.querySelector(selector);
        if (!element || !effects) return;

        console.log(`✨ Applying visual effects to ${selector}:`, effects);

        // Apply enhanced highlighting class
        element.classList.add('tour-highlighted', 'enhanced');

        // Apply individual effects
        if (effects.glow) {
            element.classList.add('tour-effect-glow');
            console.log(`✨ Added glow effect`);
        }

        if (effects.pulse) {
            element.classList.add('tour-effect-pulse');
            console.log(`✨ Added pulse effect`);
        }

        if (effects.shake) {
            setTimeout(() => {
                element.classList.add('tour-effect-shake');
                console.log(`✨ Added shake effect`);
            }, 300);
        }

        if (effects.bounce) {
            setTimeout(() => {
                element.classList.add('tour-effect-bounce');
                console.log(`✨ Added bounce effect`);
            }, 600);
        }

        if (effects.float) {
            element.classList.add('tour-effect-float');
            console.log(`✨ Added float effect`);
        }

        if (effects.slide) {
            element.classList.add('tour-effect-slide');
            console.log(`✨ Added slide effect`);
        }

        if (effects.sparkle) {
            element.classList.add('tour-effect-sparkle');
            this.createSparkleParticles(element);
            console.log(`✨ Added sparkle effect with particles`);
        }

        if (effects.celebration) {
            element.classList.add('tour-effect-celebration');
            console.log(`✨ Added celebration effect`);
        }

        if (effects.rotate) {
            setTimeout(() => {
                element.style.transition = 'transform 0.5s ease';
                element.style.transform = 'rotate(5deg)';
                setTimeout(() => {
                    element.style.transform = 'rotate(0deg)';
                }, 500);
            }, 400);
            console.log(`✨ Added rotate effect`);
        }

        // Store the element for cleanup
        this.currentEffectedElement = element;
    }

    createSparkleParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 8;

        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'sparkle-particle';
                
                // Random position around the element
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                
                document.body.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1500);
            }, i * 100);
        }
    }

    clearVisualEffects() {
        // Clear effects from current element
        if (this.currentEffectedElement) {
            const effectClasses = [
                'tour-highlighted', 'enhanced',
                'tour-effect-glow', 'tour-effect-pulse', 'tour-effect-shake',
                'tour-effect-bounce', 'tour-effect-float', 'tour-effect-slide',
                'tour-effect-sparkle', 'tour-effect-celebration'
            ];
            
            effectClasses.forEach(className => {
                this.currentEffectedElement.classList.remove(className);
            });
            
            // Clear inline styles
            this.currentEffectedElement.style.transform = '';
            this.currentEffectedElement.style.transition = '';
            
            this.currentEffectedElement = null;
        }

        // Clear effects from all elements (safety cleanup)
        const allEffectedElements = document.querySelectorAll('.tour-highlighted, .enhanced, [class*="tour-effect-"]');
        allEffectedElements.forEach(el => {
            const effectClasses = [
                'tour-highlighted', 'enhanced',
                'tour-effect-glow', 'tour-effect-pulse', 'tour-effect-shake',
                'tour-effect-bounce', 'tour-effect-float', 'tour-effect-slide',
                'tour-effect-sparkle', 'tour-effect-celebration'
            ];
            
            effectClasses.forEach(className => {
                el.classList.remove(className);
            });
            
            // Clear inline styles
            el.style.transform = '';
            el.style.transition = '';
        });

        // Remove any remaining sparkle particles
        const particles = document.querySelectorAll('.sparkle-particle');
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });

        console.log(`✨ All visual effects cleared`);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing AI Assistant...');
    window.aiAssistant = new AIAssistant();
});

// Handle navigation events
window.addEventListener('beforeunload', () => {
    if (window.aiAssistant) {
        window.aiAssistant.stopAllVoice();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIAssistant;
} 