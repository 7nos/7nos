let currentIndex = 0;

  function showSlide(index) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const newPosition = -index * itemWidth;
    wrapper.style.transform = `translateX(${newPosition}px)`;
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
  }