var active = false;

document.getElementById("svg").addEventListener("click" , () => {
  if(active == false){
    document.getElementById("content-img").style.maxHeight = "1000px";
    active = true; 
  }else{
    document.getElementById("content-img").style.maxHeight = "0px";
    active = false;
  }
})


document.getElementById("svg2").addEventListener("click" , () => {
  if(active == false){
    document.getElementById("content-img2").style.maxHeight = "1000px";
    active = true; 
  }else{
    document.getElementById("content-img2").style.maxHeight = "0px";
    active = false;
  }
})

document.getElementById("svg3").addEventListener("click" , () => {
  if(active == false){
    document.getElementById("content-img3").style.maxHeight = "1000px";
    active = true; 
  }else{
    document.getElementById("content-img3").style.maxHeight = "0px";
    active = false;
  }
})

document.getElementById("svg4").addEventListener("click" , () => {
  if(active == false){
    document.getElementById("content-img4").style.maxHeight = "1000px";
    active = true; 
  }else{
    document.getElementById("content-img4").style.maxHeight = "0px";
    active = false;
  }
})


document.getElementById("svg5").addEventListener("click" , () => {
  if(active == false){
    document.getElementById("content-img5").style.maxHeight = "1000px";
    active = true; 
  }else{
    document.getElementById("content-img5").style.maxHeight = "0px";
    active = false;
  }
})




var navbarToggle = document.getElementsByClassName('navbar-toggle');
var navbarMenu = document.getElementsByClassName('ul');

var bool = false;
navbarToggle[0].addEventListener("click" , ()=>{
  console.log("run");
  if(bool==false){
    navbarMenu[0].classList.toggle("active");
    bool = true;
  }else{
    navbarMenu[0].classList.toggle("in-active");
    bool = false;
  }
})
