// 左端を残して全てのタブを消す
function deleting(pages) {
    const len = pages.length - 1;
    for (let i = len; i > 0; i--) {
        chrome.tabs.remove(pages[i].id);
    }
}

// 拡張機能アイコンがクリックされたら実行
chrome.action.onClicked.addListener(() => {
    // currentWindow：アクティブウィンドウ上のみ実行
    chrome.tabs.query({currentWindow: true}, (tabs) => {
        deleting(tabs);
    });
});