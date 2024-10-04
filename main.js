document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.basic-card');
    
    const defaultCard = cards[1];
    defaultCard.classList.add('choosen-card');
    defaultCard.querySelector('.card-header').classList.add('header-choosen-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        removeClasses();
        card.classList.add('choosen-card');
        card.querySelector('.card-header').classList.add('header-choosen-card');
      });
  
      card.addEventListener('mouseleave', () => {
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
  