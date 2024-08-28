function encriptar() {
    const input = document.getElementById('inputText').value.toLowerCase();
    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = output;
}

function desencriptar() {
    const input = document.getElementById('inputText').value;
    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = output;
}

function copiar() {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}