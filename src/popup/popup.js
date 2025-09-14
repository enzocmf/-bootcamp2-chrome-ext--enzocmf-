// popup.js
const statusEl = document.getElementById('status');
const btnHello = document.getElementById('btnHello');
const btnSave = document.getElementById('btnSave');

function updateStatus(text){
  statusEl.textContent = text;
}

document.addEventListener('DOMContentLoaded', () => {
  // read saved greeting from storage
  chrome.storage.sync.get(['savedName'], (res) => {
    if (res.savedName) {
      updateStatus('Olá, ' + res.savedName + ' — extensão pronta!');
    } else {
      updateStatus('Extensão pronta! Ainda sem nome.');
    }
  });
});

btnHello.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'HELLO', payload: { when: Date.now() } });
  alert('Olá do Web Amigo!');
});

btnSave.addEventListener('click', () => {
  const name = prompt('Digite seu nome curto (ex: João):', 'Aluno');
  if (name) {
    chrome.storage.sync.set({ savedName: name }, () => {
      updateStatus('Olá, ' + name + ' — salvo!');
    });
  }
});
