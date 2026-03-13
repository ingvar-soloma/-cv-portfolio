
let isInitialized = false;
let sessionId = null;

export const initAnalytics = () => {
    if (isInitialized) return;
    
    isInitialized = true;
    const startTime = Date.now();
    sessionId = Math.random().toString(36).substring(2, 15);
    
    const visitorInfo = {
        sessionId,
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
    };

    // Log initial visit
    logData('visit', visitorInfo);

    // Track sections with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logData('section_view', {
                    sessionId,
                    section: entry.target.id || entry.target.getAttribute('data-section'),
                    timestamp: new Date().toISOString()
                });
            }
        });
    }, { threshold: 0.3 });

    // Generalized interaction observer
    const handleInteraction = (e) => {
        const target = e.target.closest('[data-track]');
        if (!target) return;

        const action = e.type === 'click' ? 'click' : 
                     e.type === 'mouseenter' ? 'hover_start' : 'hover_end';
        
        logData('interaction', {
            sessionId,
            section: target.id || target.getAttribute('data-track'),
            action,
            element: target.tagName.toLowerCase(),
            text: target.innerText?.substring(0, 30).trim(),
            timestamp: new Date().toISOString()
        });
    };

    // Attach listeners
    document.querySelectorAll('[data-track]').forEach(el => {
        observer.observe(el);
        el.addEventListener('click', handleInteraction);
        el.addEventListener('mouseenter', handleInteraction);
        el.addEventListener('mouseleave', handleInteraction);
    });

    // Track time spent on unload
    window.addEventListener('beforeunload', () => {
        const timeSpent = Date.now() - startTime;
        logData('time_spent', {
            sessionId,
            durationMs: timeSpent,
            timestamp: new Date().toISOString()
        });
    });
};

const logData = (type, data) => {
    // For "low server resources", we can use a beacon or a simple fetch.
    // console.log(`[Analytics] ${type}:`, data);
    
    /*
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics', JSON.stringify({ type, ...data }));
    } else {
        fetch('/api/analytics', {
            method: 'POST',
            body: JSON.stringify({ type, ...data }),
            keepalive: true,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    */
};
