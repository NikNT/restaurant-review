//Logic - Theme Switcher 

const switcher = document.querySelector('.theme-switch');

const defaultTheme = localStorage.getItem('theme') || 'light-theme'; 
setTheme(defaultTheme); 

switcher.addEventListener('change', (e) => {
    // console.log(e.target.value); 
    setTheme(e.target.value); 
});

function setTheme(theme){
    theme = theme || 'light-theme'; 
    document.documentElement.className = theme; 
    
    localStorage.setItem('theme', theme); 
    switcher.value = theme; 
}
 