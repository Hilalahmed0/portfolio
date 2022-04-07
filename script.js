console.log("hello world")
document.querySelector('.close').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
 document.querySelector('.slider').classList.toggle('slidergo');
  
 if( document.querySelector('.slider').classList.contains('slidergo')){
     document.querySelector('.ham').style.display ='inline'
     document.querySelector('.close').style.display ='none'
 }
 else{
    document.querySelector('.ham').style.display ='none'
    setTimeout(()=>{
        document.querySelector('.close').style.display ='inline'
    },300);
   
 }
});