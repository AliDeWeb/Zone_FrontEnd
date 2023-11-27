const $ = document;

const hamburgerMenuSelector = $.getElementById(`hamburger-menu`);
const hamburgerMenuOpenBtnSelector = $.getElementById(
  `hamburger-menu-open-btn`
);
const hamburgerMenuCloseBtnSelector = $.getElementById(
  `hamburger-menu-close-btn`
);
const overlaySelector = $.getElementById(`overlay`);

hamburgerMenuOpenBtnSelector.addEventListener(`click`, () => {
  hamburgerMenuSelector.classList.toggle(`-right-[300px]`);
  hamburgerMenuSelector.classList.toggle(`right-0`);

  overlaySelector.classList.toggle(`hidden`);
  overlaySelector.classList.toggle(`block`);
});

hamburgerMenuCloseBtnSelector.addEventListener(`click`, () => {
  hamburgerMenuSelector.classList.toggle(`-right-[300px]`);
  hamburgerMenuSelector.classList.toggle(`right-0`);
  overlaySelector.classList.toggle(`hidden`);
  overlaySelector.classList.toggle(`block`);
});
