let buttonUp = document.getElementById('upper-case');
let buttonLo = document.getElementById('lower-case');
let buttonPr = document.getElementById('proper-case');
let buttonSe = document.getElementById('sentence-case');
let buttonSave = document.getElementById('save-text-file');
let text = document.getElementById('textarea');

buttonUp.addEventListener('click', function() {
    text.value = text.value.toUpperCase();
});

buttonLo.addEventListener('click', function() {
    text.value = text.value.toLowerCase();
});

buttonPr.addEventListener('click', function() {
    text.value = text.value.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ')
});

buttonSe.addEventListener('click', function() {
    text.value = text.value.split('. ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join('. ')
});

buttonSave.addEventListener('click', function() {
    //функция сохранения содержимого в текстовый файл
    function downloadText(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    downloadText("text.txt", text.value);
});