document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.basic-card');
    
    // Задать классы по умолчанию для второй карточки
    const defaultCard = cards[1]; // Вторая карточка
    defaultCard.classList.add('choosen-card');
    defaultCard.querySelector('.card-header').classList.add('header-choosen-card');
    
    // Добавить события для всех карточек
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Убираем классы со всех карточек перед добавлением
        removeClasses();
        card.classList.add('choosen-card');
        card.querySelector('.card-header').classList.add('header-choosen-card');
      });
  
      card.addEventListener('mouseleave', () => {
        // Можно вернуть классы на карточку по умолчанию, если нужно
        removeClasses();
        defaultCard.classList.add('choosen-card');
        defaultCard.querySelector('.card-header').classList.add('header-choosen-card');
      });
    });
  
    function removeClasses() {
      cards.forEach(card => {
        card.classList.remove('choosen-card');
        card.querySelector('.card-header').classList.remove('header-choosen-card');
      });
    }
  });
  