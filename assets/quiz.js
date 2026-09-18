document.querySelectorAll('[data-quiz]').forEach((quiz) => {
  quiz.querySelectorAll('button[data-answer]').forEach((button) => {
    button.addEventListener('click', () => {
      const question = button.closest('.quiz-question');
      const feedback = question.querySelector('.feedback');
      const isCorrect = button.dataset.answer === question.dataset.correct;

      question.querySelectorAll('button').forEach((item) => {
        item.classList.remove('correct', 'wrong');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add(isCorrect ? 'correct' : 'wrong');
      button.setAttribute('aria-pressed', 'true');
      feedback.textContent = isCorrect
        ? `正确。${question.dataset.why}`
        : question.dataset.retry || '再想一次：这是“给模型说明做法”，还是“改变程序能力”？';
    });
  });
});
