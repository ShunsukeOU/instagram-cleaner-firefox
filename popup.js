const checkboxes = ['hideStories', 'hidePosts', 'hideFooter', 'hideNav'];

//チェックボックス
browser.storage.local.get(checkboxes).then((settings) => {
    checkboxes.forEach(id => {
        document.getElementById(id).checked = settings[id] || false;
    });
});

//チェックボックスがクリックされたら設定を保存
checkboxes.forEach(id => {
    document.getElementById(id).addEventListener('change', (e) => {
        let setting = {};
        setting[id] = e.target.checked;
        browser.storage.local.set(setting);
    });
});