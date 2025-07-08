// Jahmal's Comedy Tour Configuration - Perfect for TikTok!
const TOUR_CONFIG = [
    {
        id: 1,
        selector: ".hero",
        action: "highlight",
        scroll: true,
        say: "Yo, what's up! I'm Jahmal, your comedy AI assistant, and I promise this tour is gonna be way more entertaining than that last Zoom meeting you fell asleep in! *laughs* Don't worry, I saw nothing. This is our hero section, and it's giving main character energy!",
        duration: 6000,
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
        say: "And peep this bright green 'Get Started Free' button! We use this neon green because it's basically screaming 'CLICK ME!' without being that annoying popup that follows you around the internet. You know the ones I'm talking about! *chuckles*",
        duration: 5000,
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
        say: "Check out this dashboard preview! This isn't just a pretty picture to look at - it's like a movie trailer but for software! We're giving you a sneak peek so you know exactly what you're getting into. No surprises, no 'wait, this looks nothing like what I expected' moments!",
        duration: 6000,
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
        say: "Now let's talk features! But hold up - I'm not gonna stand here and read you a boring list like I'm taking attendance. I'm gonna show you why each feature is about to change your life. Well, your work life at least!",
        duration: 5000,
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
        say: "First up - lightning-fast performance! Now, I know EVERYONE says they're 'fast,' but let me put this in perspective. We're talking about processing thousands of requests per second. That's like... if your computer was The Flash, but instead of running around Central City, it's just being really good at its job!",
        duration: 7000,
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
        say: "Next up, our AI-powered automation! Imagine having a super smart assistant who never needs coffee breaks, never calls in sick, and definitely never judges you for eating pizza for breakfast. That's what our AI does for your business. It's like having a superpower, but for boring stuff like data processing!",
        duration: 7000,
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
        say: "And security - oh boy, this is where we get serious for a hot minute! We're not talking about that 'password123' level security. We're talking bank-level encryption, compliance with every major standard, and security so tight, even WE can't peek at your data without permission. Trust is everything - it's like the foundation of a house!",
        duration: 7000,
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
        say: "Now, here's where it gets fun! This is our interactive demo section. A lot of companies just show you screenshots like they're showing vacation photos. But we believe in letting you actually test drive before you buy. It's like a car dealership, but for software, and way less pushy!",
        duration: 6000,
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
        say: "See this dashboard interface? This isn't just a pretty picture to look at - it's fully functional! You can click around, explore different features, and really get a feel for how smooth everything is. Go ahead, click on whatever catches your eye. I'll wait... *dramatic pause* ...pretty cool, right?",
        duration: 7000,
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
        say: "Notice how clean this sidebar navigation is? We spent months - MONTHS - perfecting this because we know that if software is confusing, it doesn't matter how powerful it is. People will just stare at it like it's written in ancient hieroglyphics. We kept it simple because life's complicated enough already!",
        duration: 6000,
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
        say: "These widgets showing real-time data? Performance metrics, user activity, system health - everything you need to run your business is right here. No more jumping between 47 different tools and spreadsheets like you're playing digital hopscotch. One dashboard to rule them all!",
        duration: 6000,
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
        say: "Let's talk pricing, and I'm gonna be straight with you - no hidden fees, no surprise charges, no 'contact us for pricing' nonsense that makes you feel like you're buying a car. Here's exactly what everything costs, clear as day!",
        duration: 6000,
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
        say: "Now, this Professional plan at $99 per month? This is our sweet spot, our bread and butter, our 'chef's kiss' moment! Most customers choose this because it gives you everything you need to scale. It's like upgrading from a bicycle to a sports car!",
        duration: 7000,
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
        say: "And here's what I'd suggest: start with our free trial. No risk, no commitment, no awkward phone calls from sales people. Get your hands on the platform, see how it works with your data, and experience the difference firsthand. It's like test driving a car, but for software!",
        duration: 6000,
        effects: {
            glow: true,
            pulse: false,
            shake: false
        }
    },
    {
        id: 15,
        selector: ".cta-button",
        action: "highlight",
        scroll: false,
        say: "So what do you say? Ready to join the ranks of people who actually enjoy their workflow? *laughs* I'm talking about that exclusive club of folks who finish their work and still have energy left over for actual fun activities. Trust me, once you're in, you'll wonder why you waited so long!",
        duration: 7000,
        effects: {
            glow: true,
            pulse: true,
            shake: true,
            bounce: true,
            sparkle: true
        }
    }
];

// Export the configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOUR_CONFIG;
}

// For browser usage
if (typeof window !== 'undefined') {
    window.TOUR_CONFIG = TOUR_CONFIG;
} 