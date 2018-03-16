console.log(document.getElementById('movie').value);



var cssSelector = anime({
    targets: '.titre',
    translateY: 50,
    opacity: 1,
    delay: 750
});


function getValue() {
    console.log(document.getElementById('movie').value);
    var movie = document.getElementById('movie').value;
    var answer = document.getElementById('answer');
    console.log(movie);
    answer.textContent = lovie + "Il est top ce film";
}

var movies = [
    "Le seigneur des anneaux",
    "Harry Potter",
    "Avatar",
    "Saw",
    "Labyrinthe",
    "Indiana Jones",
    "le prénom",
    "la grande vadrouille",
    "Le corbeau",
]

function getValue() {
    var movie = document.getElementById('movie').value;
    var answer = document.getElementById('answer');
    console.log(movie);
    if (movies.indexOf(movie) !== -1) {
        answer.textContent = movie + ", est vraiment génial !";
    } else {
        answer.textContent = movie + " ? Je ne Connais pas.";
    }

    anime({
        targets: answer,
        translateY: -50,
        opacity: 1,
        direction: 'alternate'
    })

}
