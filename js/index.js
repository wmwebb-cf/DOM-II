// mouseover 1
// mouseout 2
// keydown 3
// keyup 4
// wheel 5
// dblclick 6
// resize 7
//beforeprint 8




// Logo heading event
let logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseover', (event) => logoHead.setAttribute('style', 'background-color: #AACEDB; padding: 10px 20px; border-radius: 10px; transition-duration: 300ms' ));
logoHead.addEventListener('mouseout', (event) => logoHead.setAttribute('style', 'background-color: none; padding: 0; border-radius: 0; transition-duration: 200ms'));

// Navigation bar turns yellow
let theBody = document.querySelector('body');
let navBack = document.querySelector('nav');
theBody.addEventListener('keydown', (event) => {
  navBack.setAttribute('style', 'background-color: #fdb349; padding: 10px 15px; color: white; border-radius: 10px; transition-duration: 300ms')}
);
theBody.addEventListener('keyup', (event) =>  navBack.setAttribute('style', 'background-color: none; padding: 0; color: black; border-radius: 0; transition-duration: 500ms'));

//Wheel on images
let content = document.querySelector('.content-section');
content.addEventListener('wheel', (event) => content.setAttribute('style', 'background: #fff666; padding: 15px'));

//Double click button
let headImg = document.querySelector('.intro img');
let headImgBtn = document.querySelector('.intro h2');
headImgBtn.innerHTML = 'Welcome To Fun Bus! <br> Double Click Me';
headImgBtn.setAttribute('style', 'padding: 10px 20px; position: absolute; top: 30%; left: 35%; background: rgba(224, 181, 162, 0.5); border-radius: 20px; border: solid #fff 3px; text-align: center');
headImgBtn.addEventListener('dblclick', () => headImg.setAttribute('src', 'https://picsum.photos/800/250'))

// Image resize
let imgFluid = document.querySelector('.img-fluid');
window.addEventListener('resize', () => {
  imgFluid.setAttribute('style', 'transition-duration: 1s; max-width: 50%')
})

// Before print
window.addEventListener('beforeprint', () => {
  alert('Press okay to continue to print.')
})
