let nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;

    if(test > 200){
        nav.classList.add('active');
        nav.style.position = "fixed"
    }else{
        nav.classList.remove('active');
    }
});