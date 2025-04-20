//check if there is a loclastorage color option
let mainColors =  localStorage.getItem("color-option");

if(mainColors !== null){
document.documentElement.style.setProperty("--third-color", mainColors);
document.documentElement.style.setProperty("--secondary-color", mainColors);
document.documentElement.style.setProperty("--third-color", mainColors);



document.querySelectorAll(".color-list li").forEach((el) =>{
el.classList.remove("active");

if(el.dataset.color === mainColors){
el.classList.add("active");
}
});

}

//change background 
let landingPage = document.querySelector(".landing-page");

let imagesArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"];
let colorList = document.querySelectorAll(".color-list li");


const randomBackground = document.querySelectorAll(".random-backgrounds span");


let backgroundOption = true;

//check local storage item
let backgroundLocalStorageItem = localStorage.getItem("background-option"); 

if(backgroundLocalStorageItem !== null){

    if(backgroundLocalStorageItem === "true"){
    backgroundOption = true;
}else{
backgroundOption = false;
}
document.querySelectorAll(".random-backgrounds span").forEach((el) =>{
el.classList.remove("active");
});

if(backgroundLocalStorageItem === "true"){
document.querySelector(".random-backgrounds .yes").classList.add("active");
}else{
document.querySelector(".random-backgrounds .no").classList.add("active");
}
}



let backgroundImageInterval;
function randomBackImages(){
if(backgroundOption === true){
backgroundImageInterval = setInterval(() => {
let randomImage = Math.floor(Math.random() * imagesArray.length);
landingPage.style.backgroundImage = 'url("./images/' + imagesArray[randomImage] + '")';
        
}, 10000);

}


};

let settingBox = document.querySelector(".settings-box");
let icon = document.querySelector(".settings-box i");

icon.onclick = function(){
settingBox.classList.toggle("opened");
};

colorList.forEach((li) =>{
li.addEventListener("click",(e) =>{
document.documentElement.style.setProperty("--secondary-color",e.target.dataset.color);
document.documentElement.style.setProperty("--third-color",e.target.dataset.color);

localStorage.setItem("color-option",e.target.dataset.color);

e.target.parentElement.querySelectorAll(".active").forEach((el) =>{
el.classList.remove("active");
});
e.target.classList.add("active");
});
});


randomBackground.forEach((span) =>{
    span.addEventListener("click",(e) =>{
    
    e.target.parentElement.querySelectorAll(".active").forEach((el) =>{
    el.classList.remove("active");

    
    });
    e.target.classList.add("active");
    if(e.target.dataset.back === "yes"){
        backgroundOption = true;
        randomBackImages();
        localStorage.setItem("background-option",true);    
    }else {
    backgroundOption = false;
    clearInterval(backgroundImageInterval);
    localStorage.setItem("background-option",false);  
}    
});
});
randomBackImages();

let showBullets = document.querySelectorAll(".nav-bullets .bullets");
let showBulletsSpans = document.querySelectorAll(".show-bullets span");
let navBullets = document.querySelector(".nav-bullets");
let bulletLocalStorage = localStorage.getItem("showBullets-option");

if(bulletLocalStorage !== null){
showBulletsSpans.forEach((span) => {
span.classList.remove("active");
});
if(bulletLocalStorage === "show"){
    navBullets.style.display = "block";
document.querySelector(".show-bullets .yes").classList.add("active");
}else{
    navBullets.style.display = "none";
document.querySelector(".show-bullets .no").classList.add("active");

}
}

showBulletsSpans.forEach((span) => {
span.addEventListener("click",(e) => {
e.target.parentElement.querySelectorAll(".active").forEach((el) => {
el.classList.remove("active");
});
e.target.classList.add("active");
if(e.target.dataset.bullet === "yes"){
navBullets.style.display = "block";
localStorage.setItem("showBullets-option","show");
}else{
navBullets.style.display = "none";
localStorage.setItem("showBullets-option","hide");

}
});
});

//select skills
let skills = document.querySelector(".skills");
let skillsSpan = document.querySelectorAll(".skill-prog span");

window.onscroll =  function(){
let skillsOfSetTop = skills.offsetTop;

let skillsOuterHeight = skills.offsetHeight;

let windowHeight = this.innerHeight;

let windowScrollTop = this.pageYOffset;

if(window.scrollY > (skillsOfSetTop + skillsOuterHeight - windowHeight)){

skillsSpan.forEach((span) =>{
span.style.width = span.dataset.width;
});

}
};


let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) =>{
img.addEventListener("click",(e)=>{

let popupOverlay = document.createElement("div");
popupOverlay.className = "popup-overlay";

document.body.appendChild(popupOverlay);

let popupBox = document.createElement("div");

popupBox.className ="popup-box";

let popupImage = document.createElement("img");

popupImage.src = e.target.src;

popupBox.appendChild(popupImage);

document.body.appendChild(popupBox);

if(img.alt !== null){
let imgAlt = document.createElement("h3");

let imgText = document.createTextNode(img.alt);

imgAlt.appendChild(imgText);

popupBox.appendChild(imgAlt);
}

let closeSpan = document.createElement("span");

let closeSpanText = document.createTextNode("X");

closeSpan.appendChild(closeSpanText);

closeSpan.className = "close-button";

popupBox.appendChild(closeSpan);


});

});


document.addEventListener("click",function(e){
if(e.target.className === "close-button"){
document.querySelector(".popup-box").remove();
// e.target.parentNode.remove();//or this way
document.querySelector(".popup-overlay").remove();
}

});

let bullets = document.querySelectorAll(".nav-bullets .bullets");

let links = document.querySelectorAll(".links li a");

function scrollToSelectedSection(elements){
elements.forEach((el) => {
el.addEventListener("click",(e) => {
document.querySelector(e.target.dataset.section).scrollIntoView({
behavior:"smooth",
});
});
});
};

scrollToSelectedSection(bullets);
scrollToSelectedSection(links);


//reset button
document.querySelector(".reset-options").onclick = function(){
window.localStorage.clear();
window.location.reload();
};

//toggle menu 
let toggleButton = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
let iconMenu = document.querySelector(".toggle-menu i");
iconMenu.onclick = function(){
tLinks.classList.toggle("open-menu");

};




