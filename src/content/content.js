// content.js (executado nas páginas que baterem com matches)
console.log('Bootcamp Helper - content script ativo nesta página:', location.href);

// exemplo: destacar todos os links da página (leve)
Array.from(document.querySelectorAll('a')).slice(0,10).forEach(a => {
  a.style.outline = '2px dashed #ff77aa';
});
