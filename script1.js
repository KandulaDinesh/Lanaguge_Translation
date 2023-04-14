document.getElementById('translateBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var languageSelect = document.getElementById('languageSelect').value;

    if (inputText === '') {
        alert('Input text cannot be empty.');
        return;
    }

    if (languageSelect === '') {
        alert('Please select a language.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('outputText').textContent = response[0][0][0];
            var audio = new Audio('https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=' + languageSelect + '&q=' + encodeURIComponent(response[0][0][0]));
            audio.play();
        }
    };
    xhr.open('GET', 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + languageSelect + '&dt=t&q=' + encodeURIComponent(inputText));
    xhr.send();
});


// document.getElementById('translateBtn').addEventListener('click', function() {
//     var inputText = document.getElementById('inputText').value;
//     var languageSelect = document.getElementById('languageSelect').value;

//     if (inputText === '') {
//         alert('Input text cannot be empty.');
//         return;
//     }

//     if (languageSelect === '') {
//         alert('Please select a language.');
//         return;
//     }

//     // Remove punctuation marks from input text
//     var inputTextWithoutPunctuation = inputText.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').replace(/\s+/g, ' ');

//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             var translatedTextWithoutPunctuation = response[0][0][0];
//             var translatedText = addPunctuationMarks(inputText, translatedTextWithoutPunctuation);
//             document.getElementById('outputText').textContent = translatedText;
//             var audio = new Audio('https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=' + languageSelect + '&q=' + encodeURIComponent(translatedTextWithoutPunctuation));
//             audio.play();
//         }
//     };
//     xhr.open('GET', 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + languageSelect + '&dt=t&q=' + encodeURIComponent(inputTextWithoutPunctuation));
//     xhr.send();
// });

// // Function to add punctuation marks back to translated text
// function addPunctuationMarks(originalText, translatedTextWithoutPunctuation) {
//     var originalWords = originalText.split(' ');
//     var translatedWords = translatedTextWithoutPunctuation.split(' ');
//     var translatedText = '';

//     for (var i = 0; i < originalWords.length; i++) {
//         var originalWord = originalWords[i];
//         var translatedWord = translatedWords[i];

//         if (originalWord.match(/[.,?!]/g)) {
//             var originalPunctuation = originalWord.match(/[.,?!]/g)[0];
//             translatedWord += originalPunctuation;
//         }

//         translatedText += translatedWord + ' ';
//     }

//     return translatedText.trim();
// }


