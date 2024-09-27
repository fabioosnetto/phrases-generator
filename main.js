const phrases = [
   'frase 1',
   'frase 2',
   'frase 3',
   'frase 4',
   'frase 5',
   'frase 6',
   'frase 7',
];

function getRandomPhrase(phrases) {
   let phrase = phrases[Math.floor((Math.random() * phrases.length))];
   return phrase;
}

function showPhrase() {
   const el = document.querySelector('.phrase');

   el.innerHTML = getRandomPhrase(phrases);
}

showPhrase();