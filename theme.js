//selection des elements neccessaire.
let btn = document.querySelector("#mode");
let span = document.querySelector("span");

//activation des buttons
btn.addEventListener('click', () =>{
    if(document.body.classList.contains('dark')){
        //Mode clair
        document.body.className = '';
        span.textContent ='Theme sombre';
        localStorage.setItem('theme','clair');

    }else{
        //Mode sombre
        modeSombre();
    }
});