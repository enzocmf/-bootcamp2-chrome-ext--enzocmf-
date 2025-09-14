// service-worker.js (background)
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Bootcamp Helper instalado/atualizado:', details);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.type === 'HELLO') {
    console.log('Mensagem HELLO recebida do popup ou content script:', message.payload || message);
    // Exemplo: atualizar badge com contagem (apenas demonstração)
    if (chrome.action && chrome.action.setBadgeText) {
      chrome.action.setBadgeText({ text: 'OK' });
      setTimeout(() => chrome.action.setBadgeText({ text: '' }), 1500);
    }
  }
});
