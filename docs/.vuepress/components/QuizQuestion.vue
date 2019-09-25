<template>
  <div>
    <div v-for="q in questions" class="quiz-question">
      <h2>{{ q.title }}</h2>
      <QuizChoice ans="fegato" yes
        >Si - Le epatiti virali sono processi infettivi del fegato.</QuizChoice
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "Esiste un vaccino:",
          choices: [
            "per l’epatite A",
            "per l’epatite B",
            "per l’epatite C",
            {
              right: true,
              text: "più di una risposta è corretta",
              explain:
                "Esiste un vaccino per l’epatite A (facoltativo) e B (obbligatorio)"
            }
          ]
        }
      ]
    };
  }
};
</script>