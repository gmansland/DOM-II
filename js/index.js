// Your code goes here

// Mouse Wheel alert 1
const bod = document.querySelector('body');
bod.addEventListener('wheel', function alertMeOnce(){
    alert("woooo hold on there son did you even read that part? Here lets make it more fun for you!");
    bod.removeEventListener('wheel', alertMeOnce);
  });

// header disapears 
const header = document.querySelector('header');
bod.addEventListener("keydown", () => header.style.opacity = "0");

//links color on dblclick   
const nav = document.querySelector(".nav"); 
nav.addEventListener("dblclick", (pink) => {
    pink.target.style.backgroundColor = 'pink';
});

//Mouse over resize 
const loGo = document.querySelector('.logo-heading');
loGo.addEventListener("mouseover", (e) => e.target.style.transform = "scale(2.5)");

//stop nav from reloading 
const navlink = document.querySelectorAll('a.nav-link');
navlink.forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
    link.addEventListener("dblclick", e => {
        e.preventDefault();
        e.target.classList.toggle("red");
    });
});

//random color H2 on mouse wheel 
const h2 = document.querySelectorAll('h2');
h2.forEach(h => {
    document.querySelector('body').addEventListener("wheel", e => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        h.style.color = `#${randomColor}`;
    });
});

//random color on h4 on mouse wheel
const h4 = document.querySelectorAll('h4');
h4.forEach(h => {
    document.querySelector('body').addEventListener("wheel", e => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        h.style.color = `#${randomColor}`;
    });
});

//random color p on mouse wheel 
const p = document.querySelectorAll('p');
p.forEach(h => {
    document.querySelector('body').addEventListener("wheel", e => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        h.style.color = `#${randomColor}`;
    });
});

//Drag resize 
const funBusBanner = document.querySelector(".content-destination > img" );
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');

// colorChange buttons on mouse over 
const butt = document.querySelectorAll('.destination .btn');
butt.forEach(function (btn) {
    btn.addEventListener("mouseover", (colorChange) => {
        colorChange.target.style.color = "blue";
        colorChange.target.style.background = "Yellow";
    });
});

// alert on resize 
window.addEventListener('resize', () => alert("Transformation compleate"))
