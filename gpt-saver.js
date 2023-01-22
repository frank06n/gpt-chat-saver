function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

(async () => {
  console.log('[Gpt Saver] starting...')
  console.log('[Gpt Saver] cloning chat...')
  const elem = document.querySelector('.text-sm').cloneNode(true);
  for (let c of elem.querySelectorAll('button'))
    c.parentElement.removeChild(c)

  console.log('[Gpt Saver] fetching css...')
  const response = await fetch('https://raw.githubusercontent.com/frank06n/gpt-chat-saver/main/style.css');
  const css = await response.text();

  console.log('[Gpt Saver] creating file...')
  const mpage = [];
  mpage.push(
    '<html>',
    '<head>',
    '<title>' + document.title + '</title>',
    '<style>', css, '</style>',
    '</head>',
    '<body>', elem.outerHTML, '</body>',
    '</html>');

  console.log('[Gpt Saver] downloading...')
  download('gpt3_save - ' + document.title + '.html', mpage.join('\n'));
})();
