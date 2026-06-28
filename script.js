// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});

// ===============================
// Navbar Blur
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(255,255,255,.85)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.18)";
header.style.boxShadow="none";

}

});

// ===============================
// Back To Top
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Dark Mode
// ===============================

const theme=document.getElementById("themeToggle");

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.innerHTML="☀️";

}else{

theme.innerHTML="🌙";

}

};

// ===============================
// Lightbox Gallery
// ===============================

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.querySelector(".close");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

// ===============================
// Typing Effect
// ===============================

const text="Every journey tells a story.";

const heroText=document.querySelector(".hero p");

heroText.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

heroText.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

// ===============================
// Mobile Menu
// ===============================

const menuBtn=document.querySelector(".menu-btn");

const menu=document.querySelector("nav ul");

menuBtn.onclick=()=>{

menu.classList.toggle("active");

};

// ===============================
// Avatar Hover
// ===============================

const avatar=document.querySelector(".avatar");

avatar.addEventListener("mousemove",()=>{

avatar.style.transform="scale(1.08) rotate(4deg)";

});

avatar.addEventListener("mouseleave",()=>{

avatar.style.transform="scale(1) rotate(0deg)";

});.hidden{

opacity:0;

transform:translateY(60px);

transition:.8s;

}

.show{

opacity:1;

transform:translateY(0);

}

nav ul.active{

display:flex;

position:absolute;

top:80px;

right:20px;

background:white;

padding:20px;

border-radius:15px;

flex-direction:column;

box-shadow:0 10px 25px rgba(0,0,0,.15);

}

body.dark{

background:#1d1d1d;

color:white;

}

body.dark section{

background:transparent;

}

body.dark .info-card,
body.dark .place-card,
body.dark .contact-card,
body.dark .video-box{

background:#2b2b2b;

color:white;

}

#loader{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:linear-gradient(135deg,#ffe3ef,#fff7fb);

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

z-index:99999;

transition:.6s;

}

.flower{

font-size:60px;

animation:spin 2s linear infinite;

}

@keyframes spin{

100%{

transform:rotate(360deg);

}

}
