// =====================================================
// User Onboarding & Discovery System
// =====================================================

class UserOnboarding {
    constructor() {
        this.hasShownWelcome = false;
        this.hasInteractedWithAI = false;
        this.notifications = [];
        this.init();
    }

    init() {
        // Wait for page to load completely
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.startOnboarding();
            });
        } else {
            this.startOnboarding();
        }
    }

    startOnboarding() {
        // Check if user has seen the demo before
        const hasSeenDemo = localStorage.getItem('ai-demo-seen');
        
        if (!hasSeenDemo) {
            // First-time visitor experience
            setTimeout(() => {
                this.showWelcomeNotification();
                this.enhanceAIButton();
                this.showPointingIndicator();
            }, 2000); // Wait 2 seconds after page load
        } else {
            // Returning visitor - subtle hint
            setTimeout(() => {
                this.showSubtleHint();
                this.addGentlePulse();
            }, 1000);
        }

        this.setupEventListeners();
    }

    showWelcomeNotification() {
        const notification = this.createNotification({
            type: 'welcome',
            title: '🎉 Welcome! Experience Our Interactive Demo',
            message: 'Click the AI assistant to start a personalized product tour with voice guidance!',
            icon: '🤖',
            duration: 8000,
            actions: [
                {
                    text: 'Start Demo',
                    action: () => {
                        this.triggerAIAssistant();
                        this.dismissNotification(notification);
                    }
                },
                {
                    text: 'Maybe Later',
                    action: () => {
                        this.dismissNotification(notification);
                        this.showSubtleReminder();
                    }
                }
            ]
        });

        this.hasShownWelcome = true;
    }

    showSubtleHint() {
        const hint = this.createNotification({
            type: 'hint',
            title: '💡 Try Our AI Demo',
            message: 'Experience our interactive product tour',
            icon: '🎯',
            duration: 5000,
            position: 'bottom-left',
            actions: [
                {
                    text: 'Start Tour',
                    action: () => {
                        this.triggerAIAssistant();
                        this.dismissNotification(hint);
                    }
                }
            ]
        });
    }

    showSubtleReminder() {
        setTimeout(() => {
            const reminder = this.createNotification({
                type: 'reminder',
                title: '🚀 Ready for the Demo?',
                message: 'The AI assistant is waiting to show you around',
                icon: '✨',
                duration: 6000,
                position: 'bottom-right'
            });
        }, 15000); // Show after 15 seconds
    }

    createNotification({ type, title, message, icon, duration = 5000, position = 'top-right', actions = [] }) {
        const notification = document.createElement('div');
        notification.className = `user-notification ${type} ${position}`;
        
        const iconEl = icon ? `<div class="notification-icon">${icon}</div>` : '';
        const actionsHtml = actions.map(action => 
            `<button class="notification-action" data-action="${action.text}">${action.text}</button>`
        ).join('');

        notification.innerHTML = `
            <div class="notification-content">
                ${iconEl}
                <div class="notification-text">
                    <div class="notification-title">${title}</div>
                    <div class="notification-message">${message}</div>
                </div>
                <button class="notification-close">×</button>
            </div>
            ${actions.length > 0 ? `<div class="notification-actions">${actionsHtml}</div>` : ''}
        `;

        // Add event listeners
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.dismissNotification(notification));

        // Add action listeners
        actions.forEach(action => {
            const btn = notification.querySelector(`[data-action="${action.text}"]`);
            if (btn) {
                btn.addEventListener('click', action.action);
            }
        });

        // Add to page
        document.body.appendChild(notification);
        this.notifications.push(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto-dismiss
        if (duration > 0) {
            setTimeout(() => this.dismissNotification(notification), duration);
        }

        return notification;
    }

    dismissNotification(notification) {
        notification.classList.add('dismissing');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            this.notifications = this.notifications.filter(n => n !== notification);
        }, 300);
    }

    enhanceAIButton() {
        const aiButton = document.getElementById('assistantButton');
        if (aiButton) {
            aiButton.classList.add('onboarding-highlight');
            
            // Add extra pulse animation
            const pulseOverlay = document.createElement('div');
            pulseOverlay.className = 'onboarding-pulse-overlay';
            aiButton.appendChild(pulseOverlay);

            // Remove enhancement after interaction
            aiButton.addEventListener('click', () => {
                this.hasInteractedWithAI = true;
                this.clearOnboardingEffects();
                localStorage.setItem('ai-demo-seen', 'true');
            }, { once: true });
        }
    }

    addGentlePulse() {
        const aiButton = document.getElementById('assistantButton');
        if (aiButton) {
            aiButton.classList.add('gentle-pulse');
        }
    }

    showPointingIndicator() {
        const aiButton = document.getElementById('assistantButton');
        if (!aiButton) return;

        const indicator = document.createElement('div');
        indicator.className = 'pointing-indicator';
        indicator.innerHTML = `
            <div class="indicator-arrow">👆</div>
            <div class="indicator-text">Click me to start!</div>
        `;

        // Position relative to AI button
        document.body.appendChild(indicator);
        
        const buttonRect = aiButton.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            indicator.style.position = 'fixed';
            indicator.style.bottom = `${window.innerHeight - buttonRect.top + 10}px`;
            indicator.style.right = `${window.innerWidth - buttonRect.right + 10}px`;
        } else {
            indicator.style.position = 'fixed';
            indicator.style.bottom = `${window.innerHeight - buttonRect.top + 20}px`;
            indicator.style.left = `${buttonRect.left - 100}px`;
        }

        // Auto-remove after 6 seconds or on interaction
        const removeIndicator = () => {
            if (indicator.parentNode) {
                indicator.classList.add('fade-out');
                setTimeout(() => {
                    if (indicator.parentNode) {
                        indicator.parentNode.removeChild(indicator);
                    }
                }, 300);
            }
        };

        setTimeout(removeIndicator, 6000);
        aiButton.addEventListener('click', removeIndicator, { once: true });
    }

    triggerAIAssistant() {
        // Use the special onboarding tour method if available
        if (window.aiAssistant && window.aiAssistant.startOnboardingTour) {
            window.aiAssistant.startOnboardingTour();
            this.hasInteractedWithAI = true;
            localStorage.setItem('ai-demo-seen', 'true');
        } else {
            // Fallback to clicking the button
            const aiButton = document.getElementById('assistantButton');
            if (aiButton) {
                aiButton.click();
                this.hasInteractedWithAI = true;
                localStorage.setItem('ai-demo-seen', 'true');
            }
        }
    }

    clearOnboardingEffects() {
        const aiButton = document.getElementById('assistantButton');
        if (aiButton) {
            aiButton.classList.remove('onboarding-highlight', 'gentle-pulse');
            
            const pulseOverlay = aiButton.querySelector('.onboarding-pulse-overlay');
            if (pulseOverlay) {
                pulseOverlay.remove();
            }
        }

        // Remove any pointing indicators
        const indicators = document.querySelectorAll('.pointing-indicator');
        indicators.forEach(indicator => {
            if (indicator.parentNode) {
                indicator.parentNode.removeChild(indicator);
            }
        });

        // Dismiss any active notifications
        this.notifications.forEach(notification => {
            this.dismissNotification(notification);
        });
    }

    setupEventListeners() {
        // Track scroll behavior to show reminders
        let scrollTimer;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                if (!this.hasInteractedWithAI && window.scrollY > 500) {
                    this.showScrollReminder();
                }
            }, 1000);
        });

        // Track time on page
        setTimeout(() => {
            if (!this.hasInteractedWithAI && !this.hasShownWelcome) {
                this.showTimeBasedReminder();
            }
        }, 30000); // After 30 seconds
    }

    showScrollReminder() {
        if (this.notifications.length > 0) return; // Don't show if other notifications are active

        const reminder = this.createNotification({
            type: 'scroll-reminder',
            title: '🎯 Don\'t Miss Our Demo!',
            message: 'Try the AI-guided tour before you leave',
            icon: '🤖',
            duration: 4000,
            position: 'bottom-center'
        });
    }

    showTimeBasedReminder() {
        const reminder = this.createNotification({
            type: 'time-reminder',
            title: '✨ Experience Our Product Demo',
            message: 'Get a personalized tour with voice guidance',
            icon: '🎙️',
            duration: 6000,
            position: 'center',
            actions: [
                {
                    text: 'Start Demo',
                    action: () => {
                        this.triggerAIAssistant();
                        this.dismissNotification(reminder);
                    }
                }
            ]
        });
    }
}

// Initialize onboarding system
window.addEventListener('load', () => {
    window.userOnboarding = new UserOnboarding();
}); 