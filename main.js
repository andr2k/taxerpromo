function copy() {
    var copyText = document.getElementById('code');
    var textArea = document.createElement('textarea');
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
    window.setTimeout(function () {
        window.alert(copyText.textContent);
    }, 100);
}


window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-163970557-1');