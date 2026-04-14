const html = document.documentElement;
const configKeys = [
    'hideStories', 'hideFooter', 'hideHome', 'hideSearch', 
    'hideExplore', 'hideReels', 'hideMessages', 
    'hideNotifications', 'hideCreate', 'hideProfile', 'hideMore'
];

browser.storage.local.get(configKeys).then((settings) => {
    configKeys.forEach(key => {
        const className = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
        if (settings[key]) {
            html.classList.add(className);
        }
    });
});

browser.storage.onChanged.addListener((changes) => {
    for (let key in changes) {
        if (configKeys.includes(key)) {
            const className = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
            if (changes[key].newValue) {
                html.classList.add(className);
            } else {
                html.classList.remove(className);
            }
        }
    }
});