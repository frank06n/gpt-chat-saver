function download(filename, text) {
    var e = document.createElement('a');
    e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    e.setAttribute('download', filename);
    e.style.display = 'none';
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
}

const DOWNLOAD_CSS = true;

(async () => {
    console.log('[Gpt Saver] v1.1 is starting...')

    const chatsNode = document.querySelectorAll('.text-sm > header')[0].parentElement;
    const cssLink = document.querySelector('link[rel="stylesheet"]').href;

    console.log('[Gpt Saver] cloning chat...')
    const elem = chatsNode.cloneNode(true);
    /*for (let c of elem.querySelectorAll('button'))
        c.parentElement.removeChild(c)*/

    var style = '';
    if (DOWNLOAD_CSS) {
        console.log('[Gpt Saver] fetching css...');
        const response = await fetch(cssLink);
        const css = await response.text();
        style = '<style>' + css + '</style>';
    }
    else {
        console.log('[Gpt Saver] Copying css link...');
        style = '<link rel="stylesheet" href="' + css + '">';
    }

    console.log('[Gpt Saver] creating file...')
    const mpage = [];
    mpage.push(
        '<html>',
        '<head>',
        '<title>' + document.title + '</title>',
        style,
        '</head>',
        '<body>', elem.outerHTML, '</body>',
        '</html>');

    console.log('[Gpt Saver] downloading...')
    download('chatgpt_save - ' + document.title + '.html', mpage.join('\n'));
})();
