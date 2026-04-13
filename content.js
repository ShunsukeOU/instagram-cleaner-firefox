const html = document.documentElement;

//FirefoxのStorageから設定を読み込む
browser.storage.local.get({
    hideStories: false,
    hidePosts: false,
    hideFooter: false,
    hideNav: false
}).then((settings) => {
    //設定がTrueなら、htmlタグにクラスを追加する
    if (settings.hideStories) html.classList.add('hide-stories');
    if (settings.hidePosts) html.classList.add('hide-posts');
    if (settings.hideFooter) html.classList.add('hide-footer');
    if (settings.hideNav) html.classList.add('hide-nav');
});

//ポップアップ画面から設定が変更されたら、リアルタイムで画面に反映する
browser.storage.onChanged.addListener((changes) => {
    if (changes.hideStories) {
        changes.hideStories.newValue ? html.classList.add('hide-stories') : html.classList.remove('hide-stories');
    }
    if (changes.hidePosts) {
        changes.hidePosts.newValue ? html.classList.add('hide-posts') : html.classList.remove('hide-posts');
    }
    if (changes.hideFooter) {
        changes.hideFooter.newValue ? html.classList.add('hide-footer') : html.classList.remove('hide-footer');
    }
    if (changes.hideNav) {
        changes.hideNav.newValue ? html.classList.add('hide-nav') : html.classList.remove('hide-nav');
    }
});