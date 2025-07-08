// Tour Configuration
const TOUR_CONFIG = [
    {
        id: 1,
        selector: ".hero",
        action: "highlight",
        scroll: true,
        say: "👋 Welcome! I'm your AI product guide. Let me show you what makes this platform special. This is our hero section where we showcase the main value proposition.",
        duration: 4000,
        effects: {
            glow: true,
            pulse: true,
            shake: false
        }
    },
    {
        id: 2,
        selector: ".cta-button",
        action: "highlight",
        scroll: false,
        say: "💡 This is your primary call-to-action button. It's designed to stand out and guide users to take the next step in their journey.",
        duration: 3500,
        cursor: {
            offsetX: 0.5,
            offsetY: 0.5,
            click: true
        },
        effects: {
            glow: true,
            pulse: true,
            shake: true
        }
    },
    {
        id: 3,
        selector: ".dashboard-mockup",
        action: "highlight",
        scroll: false,
        say: "📊 Here's a preview of the actual dashboard interface. Notice how we use visual elements to give users a taste of the product before they sign up.",
        duration: 4000,
        effects: {
            glow: true,
            pulse: false,
            shake: false,
            rotate: true
        }
    },
    {
        id: 4,
        selector: "#features",
        action: "scroll",
        scroll: true,
        say: "🚀 Now let's explore the key features that set us apart from the competition. Each feature is designed to solve specific pain points.",
        duration: 3000,
        effects: {
            glow: true,
            pulse: false,
            shake: false
        }
    },
    {
        id: 5,
        selector: ".feature-card:first-child",
        action: "zoom",
        scroll: false,
        say: "⚡ Performance is crucial for user satisfaction. Watch how I can zoom in on this feature card to make it impossible to miss!",
        duration: 3500,
        zoomLevel: 1.25,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 6,
        selector: ".feature-card:nth-child(2)",
        action: "zoom",
        scroll: false,
        say: "🤖 AI-powered automation is at the core of what we do. The zoom effect helps emphasize the most important features to users.",
        duration: 3500,
        zoomLevel: 1.25,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 7,
        selector: ".feature-card:last-child",
        action: "highlight",
        scroll: false,
        say: "🔐 Security isn't an afterthought - it's built into every layer of our platform. I can mix zoom and highlight effects for variety.",
        duration: 3500,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: false
        }
    },
    {
        id: 8,
        selector: "#demo-section",
        action: "scroll",
        scroll: true,
        say: "🎯 Here's where users can actually interact with our product. This demo section reduces friction and builds confidence.",
        duration: 3000,
        effects: {
            glow: true,
            pulse: false,
            shake: false
        }
    },
    {
        id: 9,
        selector: ".demo-interface",
        action: "highlight",
        scroll: false,
        say: "✨ This interactive demo shows the actual user interface. Users can click around and get a feel for the product without signing up.",
        duration: 4000,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            float: true
        }
    },
    {
        id: 10,
        selector: ".demo-sidebar",
        action: "highlight",
        scroll: false,
        say: "📱 The sidebar navigation keeps everything organized and accessible. Notice how the active state clearly shows where users are.",
        duration: 3000,
        effects: {
            glow: true,
            pulse: false,
            shake: false,
            slide: true
        }
    },
    {
        id: 11,
        selector: ".demo-widget:first-child",
        action: "highlight",
        scroll: false,
        say: "📈 Performance metrics are front and center. Users can see the value they're getting from the platform at a glance.",
        duration: 3500,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 12,
        selector: "#pricing",
        action: "scroll",
        scroll: true,
        say: "💰 Transparent pricing builds trust. We show all options upfront so users can make informed decisions.",
        duration: 3000,
        effects: {
            glow: true,
            pulse: false,
            shake: false
        }
    },
    {
        id: 13,
        selector: ".pricing-card.featured",
        action: "zoom",
        scroll: false,
        say: "⭐ The featured plan gets the zoom treatment to make it the clear choice! This technique is perfect for highlighting recommended options.",
        duration: 3500,
        zoomLevel: 1.2,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: true,
            sparkle: true
        }
    },
    {
        id: 14,
        selector: "#contact",
        action: "scroll",
        scroll: true,
        say: "📞 Finally, we end with a clear next step. Multiple options give users choice in how they want to engage.",
        duration: 3000,
        effects: {
            glow: true,
            pulse: false,
            shake: false
        }
    },
    {
        id: 15,
        selector: ".contact-actions",
        action: "zoom",
        scroll: false,
        say: "🎉 And that's the main tour! Notice how I can zoom in on important elements like these action buttons to draw maximum attention. Want to see more advanced features?",
        duration: 4000,
        zoomLevel: 1.3,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: true,
            sparkle: true,
            celebration: true
        }
    },
    {
        id: 16,
        selector: null,
        action: "navigate",
        scroll: false,
        say: "🚀 Now let me show you my advanced capabilities! I'll take you to the dashboard page where you can see component zooming and cross-page navigation in action.",
        duration: 3000,
        navigationUrl: "product-dashboard.html",
        effects: {
            glow: false,
            pulse: false,
            shake: false
        }
    }
];

// Assistant personality configuration
const ASSISTANT_CONFIG = {
    name: "Alex",
    personality: "friendly",
    avatar: "🤖",
    welcomeMessage: "Hi there! I'm Alex, your AI product guide. I'll help you explore this platform and show you all the cool features. Ready to get started?",
    tourCompleteMessage: "Thanks for taking the tour with me! If you have any questions or want to see something specific, just let me know. I'm here to help! 🚀",
    errorMessage: "Oops! Something went wrong. Let me try that again.",
    pauseMessage: "Tour paused. Click 'Continue' when you're ready to keep going!",
    skipMessage: "No problem! Moving on to the next section.",
    restartMessage: "Let's start over from the beginning!"
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOUR_CONFIG, ASSISTANT_CONFIG };
} 