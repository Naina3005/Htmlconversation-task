document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const sectionId = item.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });