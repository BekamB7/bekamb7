
window.addEventListener("scroll", function() {
  var header1 = document.querySelector(".outside-nav");
  const myDiv = document.querySelector('.out-menu-bar'); 
  const links = myDiv.querySelectorAll('ul a');
  

  if (window.scrollY > 100) { 

      header1.style.background = "white";
      for (let i = 0; i < links.length; i++) {
      links[i].style.color="black";
      }
  } 

  if (window.scrollY < 100) { 
      header1.style.background = "";
      for (let i = 0; i < links.length; i++) {
      links[i].style.color="";
      }
      for (let i = 0; i < logolink.length; i++) {
        logolink[i].style.color="black";
      }
  }
});

const observer = new IntersectionObserver((entries) => {
  for (let i=0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('show');
      } else {
      entries[i].target.classList.remove('show');
      }
      }
  }) ;
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));


// ***********///**** using fo teh smooth transction**********///*******
document.querySelectorAll('.outside-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
document.querySelectorAll('.back-to-top a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);


      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

const button = document.querySelector('.menu-button');
const sidebar = document.querySelector('.side-bar');
const closeButton = document.querySelector('.side-bar .close a');

button.addEventListener('click', function() {
    sidebar.style.display = 'flex';
    button.style.display = 'none';
});

closeButton.addEventListener('click', function() {
    sidebar.style.display = 'none';
    button.style.display = 'flex';
});


