const checkboxes = [
    'hideStories', 'hideFooter', 'hideHome', 'hideSearch', 
    'hideExplore', 'hideReels', 'hideMessages', 
    'hideNotifications', 'hideCreate', 'hideProfile', 'hideMore'
];

// ストレージから設定を読み込んで反映
browser.storage.local.get(checkboxes).then((settings) => {
    checkboxes.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.checked = settings[id] || false;
        }
    });
});

// 設定変更時に保存
checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('change', (e) => {
            let setting = {};
            setting[id] = e.target.checked;
            browser.storage.local.set(setting);
        });
    }
});