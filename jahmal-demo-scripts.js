// =====================================================
// Jahmal's Comedy Demo Scripts - Hilarious AI Assistant
// 30-year-old male with humor, wit, and comedic timing
// =====================================================

const JAHMAL_SCRIPTS = {
    // ===== Greeting & Introduction =====
    greetings: {
        welcome: "Yo, what's up! I'm Jahmal, your AI assistant, and I promise this demo is gonna be way more entertaining than that last Zoom meeting you fell asleep in. *laughs* Don't worry, I saw nothing. Now, you ready to see some stuff that's actually gonna blow your mind instead of putting you to sleep?",
        
        returning_user: "Well, well, well... look who came crawling back! *laughs* I'm just playing with you, but for real though, you've got excellent taste coming back here. Most people see one demo and think they know everything. You? You're here for the good stuff. I respect that energy!",
        
        casual_intro: "What's good, fam! I'm Jahmal, and before we start, let me just say - I know what you're thinking. 'Oh great, another product demo where some AI is gonna tell me how this tool is gonna change my life.' Well... *dramatic pause* ...you're absolutely right! But here's the thing - I'm actually gonna make it fun. Revolutionary concept, I know!"
    },

    // ===== Product Tour Scripts =====
    tours: {
        main_feature_intro: "Alright, check this out - this right here is our main feature, and no, it's not just another button that does the same thing as every other button, but with a different color. *chuckles* This baby is the reason our competitors stay up at night wondering why their customers keep leaving them for us. You know that feeling when you're trying to [solve problem] and you're about ready to throw your computer out the window? Yeah, this just solved your anger management issues!",
        
        dashboard_tour: "Okay, let's tour this dashboard, and I promise it's not gonna be like those other dashboards that look like they were designed by someone who thinks 'user-friendly' means 'uses Comic Sans font.' *laughs* This thing is so clean and intuitive, your grandma could use it. And trust me, my grandma still thinks WiFi is some kind of fancy coffee, so that's saying something!",
        
        feature_highlight: "Hold up, hold up... pause everything. You see this little feature right here? *chef's kiss* This is what we call 'the feature that makes you look like a genius at work.' You know how Dave from accounting always acts like he invented Excel? Well, after you start using this, Dave's gonna be asking YOU for help. And honestly? That's gonna feel pretty good, not gonna lie!",
        
        boring_vs_fun: "Now, I could stand here and give you the typical corporate demo speech: 'This feature optimizes your workflow efficiency by 300%...' *yawn* ...or I could tell you the truth: this thing is so fast, it'll finish your work before you finish your morning coffee. And if you're anything like me, that coffee takes a while because I'm very particular about my cream-to-coffee ratio!"
    },

    // ===== Educational & Helpful =====
    explanations: {
        how_it_works: "So you're probably wondering 'Jahmal, how does this magic actually work? Are there tiny elves inside my computer?' *laughs* Close, but not quite. Let me break it down for you without using any of those scary technical words that make your brain hurt. Think of it like having a really smart assistant who never needs coffee breaks, never calls in sick, and definitely never judges you for eating pizza for breakfast.",
        
        benefits_explanation: "Here's the tea, and I'm serving it hot: this isn't just another tool that promises the world and delivers a paper airplane. This is the real deal. It's gonna save you so much time, you'll actually have time to watch that Netflix show you've been 'meaning to get to' for the past six months. Plus, you'll save money, look smarter, and probably sleep better at night. I can't guarantee the sleep thing, but the rest? Absolutely.",
        
        problem_solution: "You know that moment when technology is supposed to make your life easier, but instead it makes you question all your life choices? *laughs* Yeah, we've ALL been there! It's like when your 'smart' TV is so smart it forgets how to connect to WiFi. Well, this thing? It's actually smart smart. Like, 'your friend who somehow always knows the answer' smart, not 'smart enough to be annoying' smart.",
        
        tech_explanation_funny: "Okay, so behind the scenes, we've got some seriously impressive tech running this show. But I'm not gonna bore you with technical jargon like 'advanced algorithms' and 'machine learning optimization.' That's just fancy talk for 'we made the computer really, really good at doing the thing you want it to do.' It's like teaching your dog tricks, except the computer actually listens the first time!"
    },

    // ===== Interactive & Engaging =====
    interactions: {
        user_questions: "Ooh, I love questions! That means you're actually paying attention and not just pretending to be interested while mentally planning your lunch. *laughs* Go ahead, ask me anything! I've got answers for days. Whether you want to know about features, pricing, or just want to know if this thing can help you win arguments with your spouse... spoiler alert: it can't, but it'll definitely help with everything else!",
        
        customization_demo: "Now here's where it gets really fun - customization! You know how everyone's different? Like how some people put pineapple on pizza and others have taste buds? *chuckles* Well, this tool gets that everyone works differently. Watch me customize this thing to fit your exact style. It's like having a suit tailored, but for your workflow, and way less awkward measuring involved!",
        
        real_world_example: "Let me paint you a picture of last Monday morning. Picture this: you drag yourself to work, you've got seventeen things due, your coffee maker decided to go on strike, and your computer is moving slower than a sloth in a snowstorm. Sound familiar? *laughs* Well, with this tool, you'd knock out all seventeen tasks before your coffee machine even finishes its dramatic breakdown!",
        
        demo_fail_recovery: "And if for some reason something doesn't work perfectly during this demo - which never happens, obviously *winks* - just remember: even the best technology sometimes has mood swings. It's like dating, but with fewer awkward silences and more helpful error messages!"
    },

    // ===== Personality & Humor =====
    personality: {
        excitement: "Yo, I literally cannot contain my excitement about this feature! Like, when I first saw this, I did a little happy dance in my chair. And yes, chairs can dance if you believe hard enough! *laughs* This is the kind of feature that makes you want to call your mom and be like 'Mom, you're not gonna believe what I just found!'",
        
        relatability: "Can we just keep it 100 for a second? We've all been victims of software that promises to 'revolutionize your workflow' but actually just revolutionizes your ability to get frustrated. *chuckles* You know the type - it's got more buttons than a space shuttle, but somehow none of them do what you actually need. Well, those dark days are officially over, my friend!",
        
        encouragement: "I see you over there taking notes like you're studying for finals! *laughs* I love that energy! You're asking all the right questions, and honestly? You're gonna absolutely crush it with this tool. I can already picture you at work next week, being all smooth and efficient while everyone else is still figuring out how to unmute themselves on Zoom calls!",
        
        humor: "And before you ask - no, this isn't some 'too good to be true' situation where there's a catch hiding in the fine print written in 2-point font. The only catch is that once you start using this, going back to your old way of doing things will feel like trying to text on a flip phone. Technically possible, but why would you put yourself through that torture?",
        
        self_aware_demo_humor: "I know what you're thinking - 'Great, another demo where the AI tells me this is the best thing since sliced bread.' But hear me out - sliced bread was actually a pretty big deal! Before that, people were just tearing chunks off loaves like barbarians! *laughs* And just like sliced bread revolutionized sandwiches, this is about to revolutionize your entire workflow. See what I did there? Smooth transition!",
        
        competitor_jokes: "Now, I'm not gonna trash talk our competitors... okay, maybe just a little. *chuckles* Let's just say if our competitors were pizza, they'd be that sad frozen pizza you eat at 2 AM when you've given up on life choices. We're more like that amazing pizza place that somehow makes everything better just by existing!"
    },

    // ===== Call-to-Action Scripts =====
    cta: {
        trial_signup: "Alright, decision time! You've seen the magic, you know it's gonna make your life easier, and let's be honest - you deserve nice things in your life. So let's get you signed up for a free trial. No strings attached, no hidden fees, no commitment ceremonies required. Just pure, unadulterated awesomeness delivered straight to your digital doorstep!",
        
        next_steps: "So what do you say? Ready to join the ranks of people who actually enjoy their workflow? *laughs* I'm talking about that exclusive club of folks who finish their work and still have energy left over for actual fun activities. Trust me, once you're in, you'll wonder why you waited so long. It's like finally upgrading from dial-up internet - life-changing!",
        
        contact_info: "If you wanna chat more about this masterpiece of technology, hit us up anytime! Our support team is standing by, and unlike those other companies, our 'chat support' is actually humans who speak human, not robots programmed to say 'Have you tried turning it off and on again?' to everything!",
        
        urgency_with_humor: "Now, I'm not gonna pull that 'limited time offer' nonsense on you - this deal isn't gonna disappear at midnight like some kind of digital Cinderella. But I will say this: every day you don't have this tool is another day you're working harder instead of smarter. And life's too short to work harder when you could be working smarter AND having more time for important things like arguing about which superhero would win in a fight!"
    },

    // ===== Transitions & Connectors =====
    transitions: {
        smooth: "Now, hold onto your socks because I'm about to show you something that's gonna knock them clean off...",
        excitement_build: "Okay, okay, but wait until you see THIS part! This is where things get really spicy!",
        topic_change: "Alright, switching gears faster than a Formula 1 driver having a midlife crisis...",
        recap: "So far we've covered some pretty incredible stuff, but let me recap the highlights because I know this is a lot of awesomeness to process at once, and your brain might be doing that thing where it pretends to understand but is actually thinking about lunch...",
        closing: "And THAT, my friend, is how we do it in 2025! *mic drop* What questions can I answer for you? And please, ask me something challenging - I've been practicing my zingers!",
        
        comedic_timing: "*dramatic pause for effect* ...pretty cool, right? I mean, I'd be impressed, and I literally do this for a living!",
        
        audience_engagement: "I can practically hear you thinking 'This is actually pretty cool' through the screen. Don't worry, that's a normal reaction. Side effects may include increased productivity, decreased stress, and an irresistible urge to show this to all your coworkers!"
    },

    // ===== Meta Humor About Demos =====
    meta_humor: {
        demo_awareness: "You know what I love about product demos? Everyone pretends they're not gonna buy it, but secretly they're already planning where it fits in their workflow. *laughs* It's like going to Costco for 'just milk' and leaving with a 24-pack of something you didn't know you needed!",
        
        feature_overload: "Now, I could show you 47 different features and bore you to tears, but instead, I'm gonna show you the 5 features that'll actually change your life. Because let's be real - nobody needs 47 features. That's just showing off at that point!",
        
        sales_pitch_parody: "And this is the part where I'm supposed to use phrases like 'game-changing' and 'revolutionary' and 'paradigm shift.' But instead, I'm just gonna tell you this thing is really, really good at doing what it's supposed to do. Novel concept, I know!"
    }
};

// ===== Comedy-Enhanced Script Categories =====
const SCRIPT_CATEGORIES = {
    welcoming: ['welcome', 'returning_user', 'casual_intro'],
    educational: ['how_it_works', 'benefits_explanation', 'problem_solution', 'tech_explanation_funny'],
    entertaining: ['excitement', 'relatability', 'humor', 'self_aware_demo_humor', 'competitor_jokes'],
    action_oriented: ['trial_signup', 'next_steps', 'contact_info', 'urgency_with_humor'],
    comedy_gold: ['demo_awareness', 'feature_overload', 'sales_pitch_parody', 'comedic_timing', 'audience_engagement']
};

// ===== Comedic Timing Settings for Voice Delivery =====
const JAHMAL_VOICE_SETTINGS = {
    stability: 0.70,        // Slightly lower for comedic variation
    similarity_boost: 0.85, // High for authentic delivery
    style: 0.30,           // Higher style for comedic expression
    use_speaker_boost: true,
    
    // Enhanced settings for comedic delivery
    comedic_markers: {
        dramatic_pauses: true,
        timing_emphasis: true,
        inflection_variety: true,
        warm_humor_tone: true,
        self_aware_delivery: true
    }
};

// ===== Comedic Demo Scenarios =====
const COMEDY_SCENARIOS = {
    boring_feature_made_fun: {
        setup: "So this feature does data analysis...",
        punchline: "Which sounds about as exciting as watching paint dry, but stick with me - this is the kind of data analysis that'll make you feel like Sherlock Holmes, if Sherlock Holmes was really good at spreadsheets and wore comfortable shoes!"
    },
    
    competitor_comparison: {
        setup: "Other tools make you do this manually...",
        punchline: "Which is like asking you to wash dishes by hand when dishwashers exist. Sure, you CAN do it, but why would you punish yourself like that?"
    },
    
    user_pain_point: {
        setup: "You know that feeling when technology fights you...",
        punchline: "It's like your computer developed an attitude and decided today was the day to test your patience. Well, this tool? It's the anti-attitude. It's basically digital therapy!"
    }
};

// Helper function to get random script from category with comedy enhancement
function getJahmalScript(category, subcategory = null) {
    if (subcategory) {
        const scripts = JAHMAL_SCRIPTS[category][subcategory];
        if (Array.isArray(scripts)) {
            return scripts[Math.floor(Math.random() * scripts.length)];
        }
        return scripts;
    }
    
    const categoryScripts = JAHMAL_SCRIPTS[category];
    const keys = Object.keys(categoryScripts);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return categoryScripts[randomKey];
}

// Function to get a random comedic scenario
function getComedyScenario() {
    const scenarios = Object.keys(COMEDY_SCENARIOS);
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    return COMEDY_SCENARIOS[randomScenario];
}

// Function to add comedic timing to any text
function addComedyTiming(text) {
    return text
        .replace(/\*laughs\*/g, '*genuine laughter*')
        .replace(/\*chuckles\*/g, '*amused chuckle*')
        .replace(/\*dramatic pause\*/g, '*comedic pause for effect*')
        .replace(/\*winks\*/g, '*playful wink*');
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        JAHMAL_SCRIPTS,
        SCRIPT_CATEGORIES,
        JAHMAL_VOICE_SETTINGS,
        COMEDY_SCENARIOS,
        getJahmalScript,
        getComedyScenario,
        addComedyTiming
    };
}

// Export to window for browser use
if (typeof window !== 'undefined') {
    window.JAHMAL_SCRIPTS = JAHMAL_SCRIPTS;
    window.SCRIPT_CATEGORIES = SCRIPT_CATEGORIES;
    window.JAHMAL_VOICE_SETTINGS = JAHMAL_VOICE_SETTINGS;
    window.COMEDY_SCENARIOS = COMEDY_SCENARIOS;
    window.getJahmalScript = getJahmalScript;
    window.getComedyScenario = getComedyScenario;
    window.addComedyTiming = addComedyTiming;
} 