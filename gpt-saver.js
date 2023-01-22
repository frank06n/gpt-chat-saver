function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const elem = document.querySelector('.text-sm').cloneNode(true);
for (let c of elem.querySelectorAll('button'))
    c.parentElement.removeChild(c)

const mpage = [];
mpage.push(
    '<html>',
    '<head>',
    '<title>'+document.title+'</title>',
    '<link rel="stylesheet" href="https://chat.openai.com/_next/static/css/05101231d7a7253c.css"/>',
    '</head>',
    '<body>',
    elem.outerHTML,
    '</body>',
    '</html>');

download('gpt3_save - '+document.title+'.html', mpage.join('\n'));