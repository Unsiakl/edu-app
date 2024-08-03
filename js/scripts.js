document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#spellingForm').addEventListener('submit', function (event) {
        event.preventDefault();
        checkSpelling();
        alert('Form berhasil dikirim!');
    });
});

function checkSpelling() {
    var text = document.getElementById('textToCheck').value;
    var result = text;

    // Perbaiki beberapa kesalahan spelling umum
    var spellingCorrections = {
        "teh": "the",
        "adn": "and",
        "recieve": "receive",
        "occured": "occurred",
        "seperate": "separate",
        "definately": "definitely",
        "goverment": "government",
        "wierd": "weird",
        "enviroment": "environment",
        "tommorow": "tomorrow",
        "becuase": "because",
        "beleive": "believe",
        "arguement": "argument"
    };

    for (var error in spellingCorrections) {
        var regex = new RegExp("\\b" + error + "\\b", "gi");
        result = result.replace(regex, spellingCorrections[error]);
    }

    // Perbaiki beberapa kesalahan grammar dasar
    var grammarCorrections = {
        "\\bI amn't\\b": "I am not",
        "\\bHe don't\\b": "He doesn't",
        "\\bShe don't\\b": "She doesn't",
        "\\bThey doesn't\\b": "They don't",
        "\\bA apple\\b": "An apple",
        "\\bAn university\\b": "A university",
        "\\bI has\\b": "I have",
        "\\bYou was\\b": "You were",
        "\\bThey was\\b": "They were",
        "\\bI can able to\\b": "I can",
        "\\bMore better\\b": "better",
        "\\bMore worse\\b": "worse"
    };

    for (var error in grammarCorrections) {
        var regex = new RegExp(error, "gi");
        result = result.replace(regex, grammarCorrections[error]);
    }

    document.getElementById('spellingResult').innerText = 'Hasil: ' + result;
}
