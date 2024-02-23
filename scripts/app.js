function validateText(text) {
  return /^[a-z ]+$/.test(text);
}

function checkValueInput() {
  let textAreaInput = document.getElementById('text');
  let buttonEncrypt = document.querySelector('.button__options__encrypt');
  let buttonDecrypt = document.querySelector('.button__options__decrypt');

  if (textAreaInput !== '') {
    buttonEncrypt.disabled = false;
    buttonDecrypt.disabled = false;
  };
}

function encrypt() {
  let text = document.getElementById('text').value.toLowerCase();

  if (!validateText(text)) {
    alert('Por favor, não insira acento e caracteres especiais.');
    return;
  }

  let result = text.replace(/e/g, 'enter')
                  .replace(/i/g, 'imes')
                  .replace(/a/g, 'ai')
                  .replace(/o/g, 'ober')
                  .replace(/u/g, 'ufat');
  document.getElementById('resultText').value = result;

  checkValueResult();
}

function decrypt() {
  var text = document.getElementById('text').value.toLowerCase();
  var result = text.replace(/enter/g, 'e')
                  .replace(/imes/g, 'i')
                  .replace(/ai/g, 'a')
                  .replace(/ober/g, 'o')
                  .replace(/ufat/g, 'u');
  document.getElementById('resultText').value = result;
}

function checkValueResult() {
  let textAreaResult = document.getElementById('resultText');

  if (textAreaResult !== '') {
    document.querySelector('.results__text_encrypted').removeAttribute('hidden');
    document.getElementById('resultText').removeAttribute('hidden');
    document.querySelector('.results__img').setAttribute('hidden', true);
    document.querySelector('.results__text').setAttribute('hidden', true);
  }
}

function copyToClipboard() {
  let copyText = document.getElementById("resultText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  try {
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado para a área de transferência: " + copyText.value);
  } catch (err) {
    console.error('Erro ao copiar texto: ', err);
    alert("Erro ao copiar texto para a área de transferência.");
  }
}

function clearValues() {
  document.getElementById('text').value = '';
  document.getElementById('resultText').value = '';
  document.querySelector('.results__text_encrypted').setAttribute('hidden', true);
  document.getElementById('resultText').setAttribute('hidden', true);
  document.querySelector('.results__img').removeAttribute('hidden');
  document.querySelector('.results__text').removeAttribute('hidden');
};