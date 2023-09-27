// Toggle styling

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');
    const body = document.body;

    // Function to toggle the theme
    function toggleTheme() {
        body.classList.toggle('dark-theme');

        // Toggle the display of sun and moon icons when switching themes
        if (body.classList.contains('dark-theme')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Check for the initial theme preference
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        toggleTheme();
    }

    // Add click event listener to the theme toggle button
    themeToggle.addEventListener('click', () => {
        toggleTheme();

        // Store the user's theme preference in localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});


// Swiper js carousel

const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    spaceBetween: 100,

    autoplay: {
        delay: 5000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });






// Gallary Filter fuctionality    //

const photos = [

  // Landscape
  {src: '/static/media/landscape 1.jpg', category: 'landscape'},
  {src: '/static/media/landscape 2.jpg', category: 'landscape'},
  {src: '/static/media/landscape 3.jpg', category: 'landscape'},
  {src: '/static/media/landscape 4.jpg', category: 'landscape'},
  {src: '/static/media/landscape 5.jpg', category: 'landscape'},
  {src: '/static/media/landscape 6.jpg', category: 'landscape'},
  {src: '/static/media/landscape 7.jpg', category: 'landscape'},
  {src: '/static/media/landscape 8.jpg', category: 'landscape'},

  // Portraits
  {src: '/static/media/portrait 1.jpg', category: 'portrait'},
  {src: '/static/media/portrait 2.jpg', category: 'portrait'},
  {src: '/static/media/portrait 3.jpg', category: 'portrait'},
  {src: '/static/media/portrait 4.jpg', category: 'portrait'},
  {src: '/static/media/portrait 5.jpg', category: 'portrait'},
  {src: '/static/media/portrait 6.jpg', category: 'portrait'},
  {src: '/static/media/portrait 7.jpg', category: 'portrait'},
  {src: '/static/media/portrait 8.jpg', category: 'portrait'},


  // Weddings
  {src: '/static/media/wedding 1.jpg', category: 'wedding'},
  {src: '/static/media/wedding 2.jpg', category: 'wedding'},
  {src: '/static/media/wedding 3.jpg', category: 'wedding'},
  {src: '/static/media/wedding 4.jpg', category: 'wedding'},
  {src: '/static/media/wedding 5.jpg', category: 'wedding'},
  {src: '/static/media/wedding 6.jpg', category: 'wedding'},
  {src: '/static/media/wedding 7.jpg', category: 'wedding'},
  {src: '/static/media/wedding 8.jpg', category: 'wedding'},

  // Graduations
  {src: '/static/media/graduation 1.jpg', category: 'graduation'},
  {src: '/static/media/graduation 2.jpg', category: 'graduation'},
  {src: '/static/media/graduation 3.jpg', category: 'graduation'},
  {src: '/static/media/graduation 4.jpg', category: 'graduation'},
  {src: '/static/media/graduation 5.jpg', category: 'graduation'},
  {src: '/static/media/graduation 6.jpg', category: 'graduation'},
  {src: '/static/media/graduation 7.jpg', category: 'graduation'},
  {src: '/static/media/graduation 8.jpg', category: 'graduation'},
];

const photoGallary = document.getElementById('photo-gallay');
const categoryButtons = document.querySelectorAll('#categories button');


// Function to filter and display photos

function filterPhotos(category){
  photoGallary.innerHTML='';
  if (category === 'all'){
    photos.forEach(photo => displayPhoto(photo));
  }else{
    const filteredPhotos = photos.filter(photo => photo.category === category);
    filteredPhotos.forEach(photo => displayPhoto(photo));
  }
}

// Display a single photo

function displayPhoto(photo){
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.category;
  photoGallary.appendChild(img);
}

// Event listener

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterPhotos(category);
  });
});

filterPhotos('all');


