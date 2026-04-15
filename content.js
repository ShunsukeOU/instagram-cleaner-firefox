const html = document.documentElement;
const configKeys = [
    'hideStories', 'hideFooter', 'hideHome', 'hideSearch', 
    'hideExplore', 'hideReels', 'hideMessages', 
    'hideNotifications', 'hideCreate', 'hideProfile', 'hideMore',
    'hideMetaApps', 'hideFloatingMessage' // 新しい項目を追加
];

const getClassName = (key) => key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

chrome.storage.local.get(configKeys, (settings) => {
    configKeys.forEach(key => {
        if (settings[key]) {
            html.classList.add(getClassName(key));
        }
    });
});

chrome.storage.onChanged.addListener((changes) => {
    for (let key in changes) {
        if (configKeys.includes(key)) {
            const className = getClassName(key);
            if (changes[key].newValue) {
                html.classList.add(className);
            } else {
                html.classList.remove(className);
            }
        }
    }
});