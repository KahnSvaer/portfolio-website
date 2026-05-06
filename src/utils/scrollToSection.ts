export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  let offset = 80;

  if (id === 'skills') {
    offset = 0;
  }

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};
