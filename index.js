import personData from './scripts/person-data.js';
import linksData from './scripts/links-data.js';
import srcData from './scripts/src-data.js';

{
  const body = document.querySelector('.page__body');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal__close');
  const modalName = document.querySelector('.modal__person-name');
  const modalAvatar = document.querySelector('.modal__person-avatar-img');
  const modalDate = document.querySelector('.modal__date');
  const modalReg = document.querySelector('.modal__reg');
  const modalBase = document.querySelector('.modal__base');
  const modalData = document.querySelector('.modal__data');
  const modalСontact = document.querySelector('.modal__contact');
  const modalOther = document.querySelector('.modal__other');

  const getText = (array) => {
    return array.reduce((html, p) => html + `<p class="modal__text">${p}</p>`, '');
  };

  const getImages = (array) => {
    return array.reduce((html, img) => html + `<img class="modal__img" src="./images/${img}" alt="">`, '');
  };

  const openModal = (e) => {
    const { target } = e;
    const id = +target.dataset.id;
    modalName.textContent = personData[id].name;
    modalAvatar.src = `./images/${personData[id].img}`;
    modalDate.textContent = personData[id].date;
    modalReg.textContent = personData[id].reg;
    modalBase.textContent = personData[id].base;
    modalData.innerHTML = getText(personData[id].data);
    modalСontact.textContent = personData[id].contact;
    modalOther.innerHTML = getText(personData[id].other) + getImages(personData[id].images);

    modal.classList.add('modal--open');
    body.classList.add('page__body--lock');
  };

  const closeModal = (e) => {
    modal.classList.remove('modal--open');
    body.classList.remove('page__body--lock');
  };


  modalCloseBtn.addEventListener('click', closeModal)

  const $cards = document.querySelector('.cards');
  const tplPerson = $cards.querySelector('#person');

  const printPerson = (persons) => {
    const cardsArray = [];
    persons.forEach((person, i) => {
      const img = tplPerson.content.querySelector('.card__img');
      img.src = `./images/${person.img}`;
      const button = tplPerson.content.querySelector('.card__button');
      button.dataset.id = i;
      button.textContent = person.name;

      const card = tplPerson.content.cloneNode(true);
      const buttonCard = card.querySelector('.card__button');
      buttonCard.addEventListener('click', openModal)

      cardsArray.push(card);
    });

    $cards.append(...cardsArray);
  };

  printPerson(personData);
}

{
  const $links = document.querySelector('.links');
  const printLinks = (links) => {
    const linksArray = [];
    links.forEach((link) => {
      const $link = document.createElement('a');
      $link.classList.add('link');
      $link.textContent = link.title;
      $link.href = link.href;
      $link.setAttribute('target', '_blank');
      linksArray.push($link);
    });

    $links.append(...linksArray);

  };

  printLinks(linksData);
}
{
  const $links = document.querySelector('.links--src');
  const printLinks = (links) => {
    const linksArray = [];
    links.forEach((link) => {
      const $link = document.createElement('a');
      $link.classList.add('link');
      $link.textContent = link.title;
      $link.href = link.href;
      $link.setAttribute('target', '_blank');
      linksArray.push($link);
    });

    $links.append(...linksArray);

  };

  printLinks(srcData);
}