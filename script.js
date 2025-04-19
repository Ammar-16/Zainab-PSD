
  const slides = document.querySelectorAll('.hero-slide');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;

  nextBtn.addEventListener('click', () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  });



  
  const pages = document.querySelectorAll('.page-number');
  const prevbtn = document.querySelector('.page-btn.prev');
  const nextbtn = document.querySelector('.page-btn.next');
  let currentPage = 1;
  const maxPage = pages.length;

  function updatePagination(newPage) {
    pages.forEach(btn => btn.classList.remove('active'));
    pages[newPage - 1].classList.add('active');
    currentPage = newPage;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === maxPage;
  }

  pages.forEach((btn, index) => {
    btn.addEventListener('click', () => updatePagination(index + 1));
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) updatePagination(currentPage - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < maxPage) updatePagination(currentPage + 1);
  });

