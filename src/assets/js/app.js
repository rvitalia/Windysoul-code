function showHeader(){
    let menu = document.querySelector('.header__line')
    
    addEventListener('scroll', ()=>{
        let scrolloffset = window.scrollY;
        if(scrolloffset > 300){
            menu.classList.add('active');
            setTimeout(() => {
                menu.style.transform = 'rotateX(0)';
            }, 300);
        }
        else{
            menu.style.transform = 'rotateX(90deg)';
            setTimeout(() => {
                menu.classList.remove('active');
            }, 300);
        }
    })
}

showHeader();



