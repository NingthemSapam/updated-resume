function showSidebar(){
  const showbar = document.querySelector('.divSidebar');
  showbar.style.display = "flex";
}

function hideSidebar(){
    const hidebar = document.querySelector('.divSidebar');
    hidebar.style.display = "none";
}

const image = document.getElementById('stickyImage');
const section2 = document.getElementById('section2');

window.addEventListener('scroll', () => {
  const sectionBottom = section2.offsetTop + section2.offsetHeight;
  const scrollPosition = window.scrollY + image.offsetHeight + 20; // 20 is the top offset

  if (scrollPosition >= sectionBottom) {
    image.classList.add('stopped');
    image.style.top = `${sectionBottom - image.offsetHeight}px`;
  } else {
    image.classList.remove('stopped');
    image.style.top = '20px';
  }
});