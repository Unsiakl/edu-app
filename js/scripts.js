document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#spellingForm').addEventListener('submit', function (event) {
        event.preventDefault();
        checkSpelling();
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

    document.getElementById('spellingResult').innerText = 'Hasil: ' + result;
}
