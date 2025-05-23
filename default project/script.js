// Функція для показу вибраної секції
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
    }
}

// Функція для повідомлення про додавання до кошика
function setupAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Товар успішно додано!');
        });
    });
}

// Запуск після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    setupAddToCartButtons();
});