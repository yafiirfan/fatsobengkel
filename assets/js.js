document.querySelector('#scroll-top').onclick = () => {
  // Mendapatkan elemen "About"
  const aboutSection = document.querySelector('#about');

  // Menggulir ke bagian "About" dengan efek smooth
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Mengarahkan scroll ke bagian atas elemen
  });
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  
  // Jika scroll mencapai bagian paling bawah
  if ((windowHeight + scrollPosition) >= bodyHeight) {
      document.getElementById('scroll-top').classList.remove('fa-angle-down');
      document.getElementById('scroll-top').classList.add('fa-angle-up');
  } else {
      document.getElementById('scroll-top').classList.remove('fa-angle-up');
      document.getElementById('scroll-top').classList.add('fa-angle-down');
  }
});

document.getElementById('moreButton').addEventListener('click', function() {
  // Mendapatkan posisi bagian speciality
  const specialitySection = document.getElementById('speciality');
  
  // Menggulir ke bagian speciality dengan efek smooth
  specialitySection.scrollIntoView({ behavior: 'smooth' });
});


