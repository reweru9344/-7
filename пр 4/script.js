// Тут можна додати анімацію або взаємодію з фігурами

// Наприклад: натискання на фігуру змінює її колір
document.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', () => {
    div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  });
});
