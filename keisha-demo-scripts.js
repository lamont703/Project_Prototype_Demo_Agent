// =====================================================
// Keisha's Demo Scripts - Vibrant AI Assistant
// 30-year-old with natural conversational style & humor
// =====================================================

const KEISHA_SCRIPTS = {
    // ===== Greeting & Introduction =====
    greetings: {
        welcome: "Hey there! I'm Keisha, your AI assistant, and girl, do I have some amazing stuff to show you today! Think of me as your tech-savvy friend who's about to blow your mind with this demo. Ready to see what all the fuss is about?",
        
        returning_user: "Well, well, well... look who's back! *laughs* I see you, coming back for more of this good stuff. You know what? I respect that. Let's pick up where we left off and dive into something even cooler this time!",
        
        casual_intro: "What's good! I'm Keisha, and honey, I'm about to take you on a journey through this product that's gonna have you like 'where has this been all my life?' Trust me, I got you covered!"
    },

    // ===== Product Tour Scripts =====
    tours: {
        main_feature_intro: "Okay, so check this out - this right here? This is the main feature that's got everyone talking. And let me tell you why this is such a big deal. You know how you're always struggling with [problem]? Well, say goodbye to all that stress, because we just solved your whole life right here!",
        
        dashboard_tour: "Alright, let's take a little tour of this dashboard, shall we? Now, I know what you're thinking - 'another boring interface,' right? Nah nah nah, we're not doing boring around here! This dashboard is clean, it's intuitive, and it's designed by people who actually GET what you need.",
        
        feature_highlight: "Okay, pause... you see that little feature right there? *chef's kiss* That's what we call a game-changer! Most people sleep on this feature, but once you start using it, you're gonna wonder how you ever lived without it. Let me show you exactly what I mean..."
    },

    // ===== Educational & Helpful =====
    explanations: {
        how_it_works: "So you're probably wondering 'Keisha, how does this magic actually work?' Great question! Let me break it down for you in a way that actually makes sense. No tech jargon, no confusing mumbo jumbo - just the real talk about what's happening behind the scenes.",
        
        benefits_explanation: "Here's the tea - this isn't just another pretty tool that looks good but doesn't deliver. This thing right here is going to save you time, save you money, and honestly? It's going to make you look like the genius you already are. Let me count the ways...",
        
        problem_solution: "You know that feeling when you're trying to [solve problem] and it's just... ugh, so frustrating? Yeah, we've ALL been there! That's exactly why this exists. We said 'enough is enough' and built something that actually works the way your brain thinks it should work."
    },

    // ===== Interactive & Engaging =====
    interactions: {
        user_questions: "Ooh, I love when people ask questions! That means you're really paying attention. Go ahead, ask me anything - I'm here for it! Whether you want to know about features, pricing, or just how this is going to change your life, I got all the answers.",
        
        customization_demo: "Now here's where it gets really fun - customization! You know how everyone's different and has their own way of doing things? Well, this product gets that. Watch me customize this to fit exactly how YOU like to work. It's like having a tool that reads your mind!",
        
        real_world_example: "Let me paint you a picture with a real scenario. Imagine you're having one of those Monday mornings - you know the type I'm talking about! - and you need to get something done FAST. With this tool, instead of spending two hours pulling your hair out, you'd be done in like 15 minutes. Let me show you exactly how..."
    },

    // ===== Personality & Humor =====
    personality: {
        excitement: "Y'all, I cannot contain my excitement about this! Like seriously, when I first saw this feature, I literally said 'shut the front door!' out loud. And yes, people were staring, but I don't care because THIS IS THAT GOOD!",
        
        relatability: "Can we just be real for a second? We've all been there - trying to use some tool that's supposed to make life easier but it's actually making everything more complicated. Well, those days are OVER, my friend!",
        
        encouragement: "I see you over there taking notes and really paying attention - I love that energy! You're asking all the right questions and honestly? You're going to absolutely crush it with this tool. I can already tell!",
        
        humor: "And before you ask - no, this isn't too good to be true, and no, there's no catch hiding in the fine print. Sometimes things are just actually as awesome as they seem! Wild concept, I know, but hey, we're living in 2025!"
    },

    // ===== Call-to-Action Scripts =====
    cta: {
        trial_signup: "Alright, so here's what we're gonna do. You've seen how amazing this is, you know it's going to make your life easier, and honestly? You deserve to have nice things! So let's get you signed up for a free trial. No commitment, no pressure, just pure awesomeness.",
        
        next_steps: "So what do you think? Are you ready to level up your game with this? Because I'm telling you, once you start using this, you're going to wonder what took you so long to find it. Let me show you how easy it is to get started...",
        
        contact_info: "If you want to chat more about this - and trust me, you're going to have questions because this is just THAT comprehensive - you can reach out anytime. I'm here to make sure you get exactly what you need to succeed!"
    },

    // ===== Transitions & Connectors =====
    transitions: {
        smooth: "Now, let me show you something else that's going to make you smile...",
        excitement_build: "Okay, okay, but wait until you see THIS part!",
        topic_change: "Alright, switching gears for a hot minute...",
        recap: "So far we've covered some pretty amazing stuff, but let me recap the highlights because I know this is a lot of goodness to take in...",
        closing: "And that, my friend, is how we do it! What questions can I answer for you?"
    }
};

// ===== Script Categories for Easy Access =====
const SCRIPT_CATEGORIES = {
    welcoming: ['welcome', 'returning_user', 'casual_intro'],
    educational: ['how_it_works', 'benefits_explanation', 'problem_solution'],
    entertaining: ['excitement', 'relatability', 'humor'],
    action_oriented: ['trial_signup', 'next_steps', 'contact_info']
};

// ===== Personality Settings for Voice Delivery =====
const KEISHA_VOICE_SETTINGS = {
    stability: 0.75,        // Balanced for natural variation with consistency
    similarity_boost: 0.85, // High for authentic delivery
    style: 0.25,           // Moderate style for personality without overdoing it
    use_speaker_boost: true,
    
    // Enhanced settings for conversational style
    conversational_markers: {
        enthusiasm: true,
        natural_pauses: true,
        inflection_variety: true,
        warm_tone: true
    }
};

// Helper function to get random script from category
function getKeishaScript(category, subcategory = null) {
    if (subcategory) {
        const scripts = KEISHA_SCRIPTS[category][subcategory];
        if (Array.isArray(scripts)) {
            return scripts[Math.floor(Math.random() * scripts.length)];
        }
        return scripts;
    }
    
    const categoryScripts = KEISHA_SCRIPTS[category];
    const keys = Object.keys(categoryScripts);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return categoryScripts[randomKey];
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        KEISHA_SCRIPTS,
        SCRIPT_CATEGORIES,
        KEISHA_VOICE_SETTINGS,
        getKeishaScript
    };
}

// Export to window for browser use
if (typeof window !== 'undefined') {
    window.KEISHA_SCRIPTS = KEISHA_SCRIPTS;
    window.SCRIPT_CATEGORIES = SCRIPT_CATEGORIES;
    window.KEISHA_VOICE_SETTINGS = KEISHA_VOICE_SETTINGS;
    window.getKeishaScript = getKeishaScript;
} 