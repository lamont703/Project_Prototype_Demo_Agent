// Dashboard Tour Configuration
const TOUR_CONFIG = [
    {
        id: 1,
        selector: "#dashboard-header",
        action: "highlight",
        scroll: true,
        say: "🎯 Welcome to the Product Dashboard! This is your command center where you can monitor everything in real-time. Let me show you the key features.",
        duration: 4000,
        effects: {
            glow: true,
            pulse: true,
            shake: false
        }
    },
    {
        id: 2,
        selector: ".dashboard-nav",
        action: "highlight",
        scroll: false,
        say: "🧭 These navigation controls let you export data, access settings, or return to the main page. Notice how I can help you navigate between different sections.",
        duration: 3500,
        effects: {
            glow: true,
            pulse: false,
            shake: false,
            slide: true
        }
    },
    {
        id: 3,
        selector: "#performance-widget",
        action: "zoom",
        scroll: true,
        say: "🚀 This performance widget shows system uptime - currently at an impressive 98.5%! Watch how I can zoom in to highlight important metrics.",
        duration: 4000,
        zoomLevel: 1.3,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 4,
        selector: "#users-widget",
        action: "zoom",
        scroll: false,
        say: "👥 Here we can see active users in real-time. The zoom effect helps draw attention to critical data points that need focus.",
        duration: 3500,
        zoomLevel: 1.2,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 5,
        selector: "#alerts-widget",
        action: "zoom",
        scroll: false,
        say: "⚠️ This is a critical alert widget! Notice how it's styled differently with a red border to indicate urgent attention is needed. The zoom makes it impossible to miss.",
        duration: 4000,
        zoomLevel: 1.4,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: true
        }
    },
    {
        id: 6,
        selector: ".dashboard-grid",
        action: "highlight",
        scroll: true,
        say: "📊 The dashboard grid layout makes it easy to scan all your key metrics at once. Each widget is designed for quick comprehension.",
        duration: 3500,
        effects: {
            glow: true,
            pulse: false,
            shake: false,
            float: true
        }
    },
    {
        id: 7,
        selector: "#revenue-widget",
        action: "zoom",
        scroll: false,
        say: "💰 Revenue tracking is front and center - $47.2K this month! The zoom feature helps emphasize the most important business metrics.",
        duration: 3500,
        zoomLevel: 1.25,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true,
            sparkle: true
        }
    },
    {
        id: 8,
        selector: "#conversions-widget",
        action: "zoom",
        scroll: false,
        say: "📈 Conversion rates are looking good at 12.8%! I can zoom in on any metric to make sure it gets the attention it deserves.",
        duration: 3500,
        zoomLevel: 1.2,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 9,
        selector: "#activity-feed",
        action: "highlight",
        scroll: true,
        say: "📋 The activity feed shows recent system events and updates. This keeps you informed about what's happening in real-time.",
        duration: 4000,
        effects: {
            glow: true,
            pulse: false,
            shake: false,
            slide: true
        }
    },
    {
        id: 10,
        selector: ".activity-item:first-child",
        action: "zoom",
        scroll: false,
        say: "✅ Individual activity items can be highlighted too! This shows the latest system backup completion - all good news.",
        duration: 3500,
        zoomLevel: 1.15,
        effects: {
            glow: true,
            pulse: true,
            shake: false,
            bounce: true
        }
    },
    {
        id: 11,
        selector: ".activity-item:nth-child(3)",
        action: "zoom",
        scroll: false,
        say: "🚨 Here's an important alert about high memory usage. The zoom effect helps draw attention to items that might need immediate action.",
        duration: 4000,
        zoomLevel: 1.15,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: true
        }
    },
    {
        id: 12,
        selector: null,
        action: "navigate",
        scroll: false,
        say: "🌐 Now let me show you how I can navigate between different pages. I'll take you back to the main landing page to see the full product tour!",
        duration: 3000,
        navigationUrl: "index.html",
        effects: {
            glow: false,
            pulse: false,
            shake: false
        }
    }
];

// Dashboard-specific Assistant Configuration
const ASSISTANT_CONFIG = {
    name: "Alex",
    personality: "friendly",
    avatar: "🤖",
    welcomeMessage: "Hi! I'm Alex, your AI dashboard guide. I can show you around this dashboard interface and demonstrate advanced features like zooming in on important widgets and navigating between pages. Ready to explore?",
    tourCompleteMessage: "Great! You've seen the advanced capabilities - component zooming and page navigation. These features help create truly engaging product demos that keep users focused on what matters most! 🎯",
    errorMessage: "Oops! Something went wrong. Let me try that again.",
    pauseMessage: "Dashboard tour paused. Click 'Continue' when you're ready to keep exploring!",
    skipMessage: "No problem! Moving on to the next component.",
    restartMessage: "Let's start the dashboard tour over from the beginning!",
    navigationMessage: "Taking you to the next page...",
    zoomMessage: "Zooming in for a closer look..."
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOUR_CONFIG, ASSISTANT_CONFIG };
} 