const bar =  document.getElementById("bar");
const nav =  document.getElementById("navbar");
const close_btn = document.getElementById("close");

if(bar){
    bar.addEventListener('click', ()=>{
      nav.classList.add('active');
    });
    
}

if(close_btn){
    close_btn.addEventListener('click', ()=>{
      nav.classList.remove('active');
    });
    
}