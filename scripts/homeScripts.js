const nav = document.getElementById('nav')

window.addEventListener('scroll', () =>{
  if (window.scrollY >=100) {
    nav.classList.add('navBlack')

  }else{
    nav.classList.remove('navBlack')
  }  
})