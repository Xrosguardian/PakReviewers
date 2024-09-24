// Skeleton Screen UI shown for 3 seconds
setTimeout(() => {
  document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 3000);



// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  let scrollPosition = window.scrollY;
  
  // Add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
  
  // Calculate new font size based on scroll position
  let newSize = 3 - (scrollPosition * 0.03); // Decrease by 0.03 rem for every 1px scrolled
  
  // Clamping the font size between 1.5rem and 3rem
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);
  
  logo.style.fontSize = newSize + "rem";
}

// Event listener for scroll event
window.addEventListener('scroll', checkScroll);

const themeSwitcher = document.getElementById('theme-switcher');

// Dark Mode Styles
function darkMode() {
  themeSwitcher.children[0].classList.replace('fa-sun', 'fa-moon');
}

// Light Mode Styles
function lightMode() {
  themeSwitcher.children[0].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme 
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (!currentTheme || currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    lightMode();
  }
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);

//check local storage for theme
const currentThemeFromLocalStorage = localStorage.getItem('theme');
if (currentThemeFromLocalStorage){
    document.documentElement.setAttribute('data-theme',currentThemeFromLocalStorage);
    if(currentThemeFromLocalStorage === 'dark'){
        darkMode();
    } else{
        lightMode();
    }

}