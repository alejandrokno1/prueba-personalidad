const questions = [
  { number: 1, text: "Cuando mis compañeros no colaboran en la elaboración de un trabajo académico, suelo sentir mucha ira e irritabilidad.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 2, text: "Tengo temor cada vez que mi familia me pregunta sobre mis notas, siento que me van a recriminar por todo.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 3, text: "Cuando me hacen un exámen suelo estar tranquilo.", scores: { "Nunca": 3, "A veces": 2, "Siempre": 1 } },
  { number: 4, text: "Siento que no estoy lo suficientemente preparado para un examen.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 5, text: "Prefiero hacer trabajos a realizar exámenes, orales o escritos.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 6, text: "Cuando realizo un examen me preocupa reprobar o no tener la nota que espero.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 7, text: "Luego de entregar un examen es inevitable sentirme angustiado al pensar en la calificación que obtendré.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 8, text: "Cada vez que voy a clase siento que me irá mal.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 9, text: "Me irrita cuando mi familia me preguntan por mis calificaciones.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 10, text: "Cuando estoy en un lugar con muchos estudiantes y profesores no puedo expresarme como quisiera.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 11, text: "Me es complicado formar grupos de trabajo, casi siempre soy el último en unirme a uno.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 12, text: "No suelo tener la iniciativa con mis compañeros para poder formar un grupo.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 13, text: "Me gusta ser el primero en hablar con mis compañeros para formar grupo.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 14, text: "Busco alguna excusa para salir del aula y evitar exponer.", scores: { "Nunca": 3, "A veces": 2, "Siempre": 1 } },
  { number: 15, text: "He sentido que se me nubla la mente a la hora de las exposiciones y no logro recordar nada sobre mi tema.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 16, text: "Me causa preocupación realizar prácticas de deporte por lo que me quedo quieto o me muevo muy poco ya que no sé si lo haré bien.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 17, text: "Me siento alegre al realizar mis practicas de deporte.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 18, text: "Durante toda la semana que tengo exámenes me siento preocupado por lo que suelo estar callado y en silencio, distante de mis amigos.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 19, text: "Se me dificulta respirar con normalidad al momento de exponer algún tema en mi salón de clases.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 20, text: "Siento sudoración en el rostro, manos o pies al momento de tener alguna presentación o exposición en público.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 21, text: "En las presentaciones o exposiciones, cuando debo actuar, hablar, interactuar siento que me sudan las manos y me las limpio frecuentemente.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 22, text: "Me pongo pálido(a) antes de exponer o realizar alguna presentación frente a mis compañeros del salón.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 23, text: "Siento calor en mis mejillas y en mi espalda cada vez que participo en debates.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 24, text: "Tengo movimientos recurrentes en las piernas, brazos, labios, ojos o dientes, que no puedo controlar cuando estoy frente a personas en una exposición o una participación individual.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 25, text: "Cuando el profesor molesta a todo mi salón por una conducta negativa, siento que me lo está diciendo a mi, así no sea yo el autor de dicha conducta.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 26, text: "Cuando el profesor hace preguntas prefiero quedarme callado para no fallar.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 27, text: "No suelo ser voluntario para brindar una participación en clase por temor a fallar en el intento.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 28, text: "Realizo intervenciones verbales voluntarias acerca de los temas que son de mi sumo interés.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 29, text: "Siento que no soy un buen estudiante al haber sacado una calificación que no esperaba en el examen.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 30, text: "Luego de entregar un trabajo pienso que pude haberlo hecho mejor.", scores: { "Nunca": 3, "A veces": 2, "Siempre": 1 } },
  { number: 31, text: "En ocasiones suelo trasnochar para presentar un buen trabajo, descuidando mis horas de sueño.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 32, text: "Luego de una exposición me recriminó a mi mismo por haber cometido una equivocación.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 33, text: "Cuando mi familia y/o amigos me felicitan por mis buenas calificaciones, no me siento satisfecho y siento que lo hacen por quedar bien.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 34, text: "Cuando obtengo una nota aprobatoria, aunque haya cometido errores, me siento conforme porque sé que le puse mi esfuerzo.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } },
  { number: 35, text: "Cuando mis amigos hablan de sus buenas notas, siento que están presumiendo con el fin de humillarme porque yo saqué una baja calificación.", scores: { "Nunca": 1, "A veces": 2, "Siempre": 3 } }
];

const questionOptions = ["Nunca", "A veces", "Siempre"];

const questionsContainer = document.getElementById("questionsContainer");
const quizForm = document.getElementById("quizForm");
const resetBtn = document.getElementById("resetBtn");

const resultModal = document.getElementById("resultModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const scoreValue = document.getElementById("scoreValue");
const levelValue = document.getElementById("levelValue");
const resultMessage = document.getElementById("resultMessage");
const resultStudent = document.getElementById("resultStudent");
const studentName = document.getElementById("studentName");
const modalContent = document.querySelector(".modal-content");

const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

function renderQuestions() {
  questionsContainer.innerHTML = questions.map((question) => {
    const optionsHtml = questionOptions.map((option) => `
      <label class="option">
        <input type="radio" name="q${question.number}" value="${question.scores[option]}">
        ${option}
      </label>
    `).join("");

    return `
      <article class="question-card" data-question="${question.number}">
        <p class="question-title"><strong>${question.number}.</strong> ${question.text}</p>
        <div class="options">${optionsHtml}</div>
      </article>
    `;
  }).join("");

  addProgressListeners();
  updateProgress();
}

function addProgressListeners() {
  const inputs = quizForm.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      removeMissingHighlight(input.name);
      updateProgress();
    });
  });
}

function updateProgress() {
  let answered = 0;

  for (const question of questions) {
    const selected = quizForm.querySelector(`input[name="q${question.number}"]:checked`);
    if (selected) answered++;
  }

  const percent = Math.round((answered / questions.length) * 100);

  progressText.textContent = `${answered} de ${questions.length} preguntas respondidas`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function classifyScore(score) {
  if (score >= 42 && score <= 59) {
    return {
      level: "Bajo",
      message: "El resultado indica que el nivel de ansiedad del estudiante es bajo.",
      className: "result-low"
    };
  }

  if (score >= 60 && score <= 69) {
    return {
      level: "Medio",
      message: "El resultado indica que el nivel de ansiedad del estudiante es medio.",
      className: "result-medium"
    };
  }

  if (score >= 70 && score <= 95) {
    return {
      level: "Alto",
      message: "El resultado indica que el nivel de ansiedad del estudiante es alto.",
      className: "result-high"
    };
  }

  return {
    level: "No evaluable",
    message: "La prueba, con las respuestas que dio, no es suficiente para poderlo evaluar, dado que se sale del rango de calificación permitido.",
    className: "result-neutral"
  };
}

function clearResultClasses() {
  modalContent.classList.remove("result-low", "result-medium", "result-high", "result-neutral");
}

function openModal() {
  resultModal.classList.remove("hidden");
}

function closeModal() {
  resultModal.classList.add("hidden");
}

function highlightMissingQuestions(missingNumbers) {
  clearMissingHighlights();

  missingNumbers.forEach((number) => {
    const card = document.querySelector(`.question-card[data-question="${number}"]`);
    if (card) {
      card.classList.add("missing");
    }
  });
}

function clearMissingHighlights() {
  document.querySelectorAll(".question-card.missing").forEach((card) => {
    card.classList.remove("missing");
  });
}

function removeMissingHighlight(questionName) {
  const number = questionName.replace("q", "");
  const card = document.querySelector(`.question-card[data-question="${number}"]`);
  if (card) {
    card.classList.remove("missing");
  }
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let total = 0;
  let unansweredQuestions = [];

  for (const question of questions) {
    const rawValue = formData.get(`q${question.number}`);

    if (rawValue === null) {
      unansweredQuestions.push(question.number);
    } else {
      total += Number(rawValue);
    }
  }

  if (unansweredQuestions.length > 0) {
    highlightMissingQuestions(unansweredQuestions);

    const firstMissing = document.querySelector(`.question-card[data-question="${unansweredQuestions[0]}"]`);
    if (firstMissing) {
      firstMissing.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    alert(
      "Por favor responda todas las preguntas antes de calcular el resultado.\n\n" +
      "Le faltan las preguntas: " + unansweredQuestions.join(", ")
    );
    return;
  }

  clearMissingHighlights();

  const result = classifyScore(total);
  const name = studentName.value.trim();

  resultStudent.textContent = name
    ? `Estudiante: ${name}`
    : "Resultado general del cuestionario";

  scoreValue.textContent = total;
  levelValue.textContent = result.level;
  resultMessage.textContent = result.message;

  clearResultClasses();
  modalContent.classList.add(result.className);

  openModal();
});

resetBtn.addEventListener("click", () => {
  quizForm.reset();
  studentName.value = "";
  updateProgress();
  closeModal();
  clearResultClasses();
  clearMissingHighlights();
});

closeModalBtn.addEventListener("click", closeModal);

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderQuestions();