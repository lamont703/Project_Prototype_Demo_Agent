// Voice Demo Script Configuration
const VOICE_DEMO_SCRIPT = {
    // Introduction and Welcome
    welcome: {
        greeting: "Hello there! Welcome to our product demo. I'm Alex, your AI-powered product guide, and I'm absolutely thrilled to show you around today. Think of me as your personal product expert who's here to make sure you see everything that makes our platform special.",
        
        introduction: "Before we dive in, let me tell you what we're going to cover in the next few minutes. I'll walk you through our main features, show you some real-world examples, and demonstrate how this can transform your business. Sound good?",
        
        engagement: "I love doing these demos because every business is unique, and I get to show you exactly how our platform can solve your specific challenges. Ready to get started?"
    },
    
    // Main Demo Flow
    demoFlow: {
        heroSection: {
            primary: "Perfect! So here we are on our main landing page. This is typically the first thing your potential customers would see, and first impressions matter, right?",
            
            secondary: "What I love about this hero section is how it immediately communicates value. See that headline? 'Transform Your Business with AI' - it's not just marketing speak. This is exactly what we help companies like yours achieve every single day.",
            
            callToAction: "And notice this bright green 'Get Started Free' button? The color choice isn't accidental. We use this neon green throughout our platform because it creates urgency and draws the eye exactly where we want it. Speaking of which, watch this..."
        },
        
        featuresSection: {
            transition: "Now, let's talk features. But here's the thing - I'm not just going to list features at you. I want to show you why each one matters to your business.",
            
            performanceFeature: "First up - lightning-fast performance. Now, I know everyone claims to be 'fast,' but let me put this in perspective. We're talking about processing thousands of requests per second. That means when your customers are using your product, they're not waiting around. They're getting instant results. And happy customers? They become loyal customers.",
            
            aiPoweredFeature: "Next, our AI-powered automation. This is where things get really exciting. Imagine having a tireless assistant that never sleeps, never makes mistakes, and gets smarter every day. That's what our AI does for your business processes. It's like having a superpower for your operations.",
            
            securityFeature: "And security - oh, this is huge. We're not talking about basic password protection here. We're talking bank-level encryption, compliance with every major standard, and security that's so robust, even we can't access your data without your permission. Because trust? That's everything in business."
        },
        
        demoSection: {
            introduction: "Now, here's where it gets fun. This is our interactive demo section. A lot of companies just show you screenshots, but we believe in letting you actually try before you buy.",
            
            interactiveElement: "See this dashboard interface? This isn't just a pretty picture - it's a fully functional demo. You can click around, explore different features, and really get a feel for how intuitive our platform is. Go ahead, try clicking on anything that interests you.",
            
            sidebar: "Notice how the sidebar navigation is clean and logical? We spent months perfecting this user experience because we know that if software is confusing, it doesn't matter how powerful it is - people won't use it.",
            
            widgets: "These widgets you see here? They're showing real-time data. Performance metrics, user activity, system health - everything you need to run your business, all in one place. No more jumping between different tools and spreadsheets."
        },
        
        pricingSection: {
            transparency: "Let's talk pricing, because I believe in complete transparency. No hidden fees, no surprise charges, no 'contact us for pricing' nonsense. Here's exactly what everything costs.",
            
            starterPlan: "Our Starter plan at $29 per month is perfect for small businesses just getting started. You get up to 1,000 API calls, basic analytics, and email support. It's designed to let you test the waters without a huge commitment.",
            
            professionalPlan: "Now, this Professional plan at $99 per month? This is our sweet spot. Most of our customers choose this because it gives you everything you need to scale - 10,000 API calls, advanced analytics, priority support, and custom integrations. It's the plan I'd recommend for most businesses.",
            
            enterprisePlan: "And for larger organizations, we have our Enterprise solution. This is fully customizable, unlimited everything, 24/7 support, and we can even deploy it on your own servers if needed. The pricing is custom because, honestly, every enterprise has different needs."
        },
        
        dashboardDemo: {
            transition: "Now, let me show you something really cool. I'm going to take you to our actual dashboard interface. This is where the magic happens on a day-to-day basis.",
            
            navigation: "Watch this smooth transition... and here we are! This is what your team would see every morning when they log in.",
            
            performanceWidget: "Look at this performance widget showing 98.5% uptime. That's not just a number - that's reliability you can count on. When your customers need your service, it's there.",
            
            userWidget: "2,847 active users right now. This real-time data helps you make decisions based on what's actually happening, not yesterday's reports.",
            
            alertsWidget: "And this alerts widget? It's showing 3 items that need attention. The system is smart enough to prioritize what matters most, so you're not drowning in notifications.",
            
            activityFeed: "This activity feed keeps you in the loop on everything happening in your system. System backups, optimizations, alerts - it's like having a pulse on your entire operation."
        }
    },
    
    // Interactive Q&A Responses
    interactiveResponses: {
        pricing: {
            question: "Great question about pricing! Let me break this down for you.",
            answer: "The beautiful thing about our pricing model is that it scales with your success. You start small with the Starter plan, and as your business grows, you naturally move up to plans that offer more value. We've designed it so that the ROI is always positive - you're always getting more value than you're paying for."
        },
        
        integration: {
            question: "Integration is actually one of our strongest points!",
            answer: "We have pre-built connectors for over 200 popular business tools. Salesforce, HubSpot, Slack, Microsoft Teams, Google Workspace - if you use it, we probably integrate with it. And if we don't? Our custom integration service can build it for you."
        },
        
        security: {
            question: "Security is absolutely critical, and I'm glad you asked!",
            answer: "We're SOC 2 compliant, GDPR compliant, and we encrypt everything - data at rest, data in transit, everywhere. We also do third-party security audits quarterly. Your data is safer with us than it is on your own servers, and I can back that up with certifications."
        },
        
        support: {
            question: "Our support is something I'm genuinely proud of!",
            answer: "We don't just fix problems - we prevent them. Our AI monitors your account 24/7 and often fixes issues before you even know they exist. When you do need help, our average response time is under 2 hours, and our customer satisfaction rating is 98.7%. We're not just a vendor - we're your partner."
        },
        
        roi: {
            question: "ROI is the most important question you can ask!",
            answer: "Our average customer sees a 300% return on investment within the first year. How? Time savings, reduced errors, increased efficiency, and better decision-making. We actually track this for you in the dashboard, so you can see exactly how much value you're getting."
        }
    },
    
    // Closing and Next Steps
    closing: {
        summary: "So here's what we've covered today: a platform that's lightning-fast, AI-powered, secure, and designed to scale with your business. We've shown you real features, real pricing, and real results.",
        
        valueProposition: "The question isn't whether this platform can help your business - it's whether you can afford not to have these capabilities. While your competitors are still doing things the old way, you could be leveraging AI to work smarter, not harder.",
        
        urgency: "Here's what I'd suggest: start with our free trial. No risk, no commitment. Get your hands on the platform, see how it works with your data, and experience the difference firsthand.",
        
        nextSteps: "I can set you up with a free trial right now, or if you have more questions, I can connect you with one of our solution specialists who can dive deeper into your specific use case. What sounds better to you?",
        
        personalTouch: "And remember, I'm here whenever you need me. Whether you're just getting started or you're ready to scale to the enterprise level, I'll be your guide through every step of the journey."
    },
    
    // Follow-up Conversations
    followUp: {
        trial: {
            setup: "Excellent choice! Let me get you set up with a free trial right now. I'll need just a few details to create your account, and you'll be up and running in less than 2 minutes.",
            credentials: "I'm sending you login credentials to the email address you provided. You'll also get a welcome email with some quick-start tutorials, but honestly, the platform is so intuitive, you might not even need them.",
            support: "And remember, during your trial, you have full access to our support team. Don't hesitate to reach out if you have any questions or need help setting anything up."
        },
        
        consultation: {
            scheduling: "Perfect! I'd love to connect you with one of our solution specialists. They can do a deeper dive into your specific industry and use case.",
            preparation: "Before that call, I'll send you a brief questionnaire. It just helps us understand your current setup and challenges so we can make the most of your time.",
            value: "These consultations typically run about 30 minutes, and most people leave with a clear roadmap for implementation, whether you choose our platform or not. It's genuinely helpful."
        },
        
        objections: {
            price: "I understand cost is always a consideration. Let me ask you this: what's the cost of not having these capabilities? How much time does your team spend on manual tasks that could be automated? How many opportunities are you missing because you don't have real-time insights?",
            
            timing: "I get it - timing is everything. But here's the thing: every day you wait is a day your competitors might be getting ahead. The good news is that implementation is faster than you think. Most customers are seeing results within their first week.",
            
            complexity: "Actually, that's exactly why we built it this way. We know business software has a reputation for being complex and hard to use. Our entire design philosophy is 'powerful but simple.' You shouldn't need a computer science degree to use business software."
        }
    }
};

// Voice Demo Configuration
const VOICE_DEMO_CONFIG = {
    // Natural speaking pace (words per minute)
    speakingPace: 150,
    
    // Pause timings for natural flow
    pauseTimings: {
        short: 800,    // After sentences
        medium: 1500,  // After paragraphs
        long: 2500     // After major sections
    },
    
    // Conversation triggers
    conversationTriggers: [
        "pricing",
        "integration", 
        "security",
        "support",
        "roi",
        "trial",
        "demo",
        "features",
        "custom"
    ],
    
    // Response patterns
    responsePatterns: {
        acknowledgment: [
            "That's a great question!",
            "I'm glad you asked about that!",
            "Absolutely, let me explain that.",
            "Perfect timing to discuss this!",
            "I love talking about this feature!"
        ],
        
        transition: [
            "Let me show you something interesting...",
            "Here's where it gets exciting...",
            "Now, this is really cool...",
            "Watch this...",
            "You're going to love this part..."
        ],
        
        emphasis: [
            "This is huge.",
            "This is a game-changer.",
            "This is where the magic happens.",
            "This is what sets us apart.",
            "This is exactly what you need."
        ]
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOICE_DEMO_SCRIPT, VOICE_DEMO_CONFIG };
} 