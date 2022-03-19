// toggle visibility of card answer

const toggleCardAnswer = document.querySelectorAll('.showanswer');

toggleCardAnswer.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('text_answer');
  });
});

/*
function toggle_visibility(idAnswerText, idButton) {
  const answer = document.getElementById(idAnswerText);
  const buttonText = document.getElementById(idButton);

  if (answer.style.display == 'block') {
    answer.style.display = 'none';
    buttonText.textContent = 'Show Answer';
  } else {
    answer.style.display = 'block';
    buttonText.textContent = 'Hide Answer';
  }
}

In html dann: onclick = "fucntion("idNameParagraph")" schreiben im button tag
*/

/* 
Manuelle Funktion

document.querySelector('button[data-card-button="2"]').addEventListener('click', function () {
    const answer3 = document.querySelector('p[data-card-answer="2"]');

    if (answer3.style.display == 'block') {
      answer3.style.display = 'none';
    } else {
    answer3.style.display = 'block';
    }
  });

  document.querySelector('button[data-card-button="3"]').addEventListener('click', function () {
    const answer3 = document.querySelector('p[data-card-answer="3"]');

    if (answer3.style.display == 'block') {
      answer3.style.display = 'none';
    } else {
    answer3.style.display = 'block';
    }
  });
*/

// toggle visibility of answer for all cards

/*

ndere Idee (funktioniert nur halb)
let numberOfCards = document.querySelectorAll(".card").length;      // Gesamtanzahl der Karten

for (let i = 0; i < numberOfCards; i++) {
    document.querySelectorAll(".showanswer")[i].addEventListener("click", function() {
        const answer = document.querySelectorAll('.text_answer')[i];

        if (answer.style.display == 'block') {
          answer.style.display = 'none';
        } else {
        answer.style.display = 'block';
        showanswer.textContent = "Hide Answer";
        }
    })
}
*/
