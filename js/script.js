// Toggle class active
const Nav = document.querySelector ('.navbar-nav');

// when hamburger clicked
document.querySelector ('#hamburger-menu').onclick = () => {
  Nav.classList.toggle ('active');
};

//klik for hide sidebar
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener ('click', function (e) {
  if (!hamburger.contains (e.target) && !Nav.contains (e.target)) {
    Nav.classList.remove ('active');
  }
});
