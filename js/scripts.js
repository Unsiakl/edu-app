document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        checkGrammar();
        alert('Form berhasil dikirim!');
    });
});

function checkGrammar() {
    var text = document.getElementById('textToCheck').value;
    var result = text;

    // Perbaiki beberapa kesalahan grammar umum (Contoh sederhana)
    var corrections = {
        " teh ": " the ",
        " adn ": " and ",
        " recieve ": " receive ",
        " occured ": " occurred ",
        " seperate ": " separate ",
        " definately ": " definitely ",
        " goverment ": " government "
    };

    for (var error in corrections) {
        var regex = new RegExp(error, "gi");
        result = result.replace(regex, corrections[error]);
    }

    document.getElementById('grammarResult').innerText = 'Hasil: ' + result;
}
