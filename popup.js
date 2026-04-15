const checkboxes = [
    'hideStories', 'hideFooter', 'hideHome', 'hideSearch', 
    'hideExplore', 'hideReels', 'hideMessages', 
    'hideNotifications', 'hideCreate', 'hideProfile', 'hideMore',
    'hideMetaApps', 'hideFloatingMessage' // 新しい項目を追加
];

chrome.storage.local.get(checkboxes, (settings) => {
    checkboxes.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.checked = settings[id] || false;
        }
    });
});

checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('change', (e) => {
            let setting = {};
            setting[id] = e.target.checked;
            chrome.storage.local.set(setting);
        });
    }
});