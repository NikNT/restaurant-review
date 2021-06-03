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


//Logic - Content Filter 

document.getElementById('submitButton').onclick = function checkComment(){

    const prohibitedWords = ['Shit', 'shit', 'SHit', 'SHIt', 'SHIT', 'sHIT', 'Asshole', 
                              'ASS', 'ass', 'ASshole', 'ASShole', 'ASSHole', 'ASSHOle', 
                              'Shit.', 'shit.', 'SHit.', 'SHIt.', 'SHIT.', 'sHIT.', 'Asshole.', 
                              'ASS.', 'ass.', 'ASshole.', 'ASShole.', 'ASSHole.', 'ASSHOle.']
                              ; 
                              
    let count = 0;

    const userName = document.getElementById('user-name').value; 
    const userComment = document.getElementById('user-comment').value; 

    const contentName = document.getElementById('content-name'); 
    const contentComment = document.getElementById('content-comment'); 

    if(userName == "" || userComment == ""){
        console.log('Please Enter Data in Fields'); 
    }

    else{

    let resultString = userComment.split(/[\s,]+/); 
    console.log('User Comment Array: ', resultString); 

    resultString.forEach(element => {

        for(let i=0; i<prohibitedWords.length; i++){
            if(element == prohibitedWords[i])
            {
                count ++;
                console.log('Count Incremented'); 
            }
        }

    });

    if(count > 0){
        console.log('Prohibted Words Found');
        window.alert('Prohibted Words Found'); 
    }

    else{
        console.log(`${userName}commented ${userComment}`);
        contentName.innerHTML = userName; 
        contentComment.innerHTML = userComment;
    }
    }

    

}