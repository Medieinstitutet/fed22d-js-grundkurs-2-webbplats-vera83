(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const l=document.querySelector(".hamburger-menu-icon");l.addEventListener("click",c);function c(t){t.currentTarget.classList.toggle("change")}const a=[{name:"Tomte vit/gr\xE5",id:0,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/tomte-vit-1.png"],alt:["",""],description:"Mysig tygtomte med fuskp\xE4ls",category:["dekoration","all"]},{name:"Veteranbil",id:1,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/tomtevagn-1.jpg",""],alt:["",""],description:"Fin veteranbil med tomte, i porslin.",category:["dekoration","all"]},{name:"",id:2,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/tomtelykta-1.png",""],alt:["",""],description:"Gullig svampformad ljuslykta i keramik",category:["dekoration","belysning","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/ljusstake-vit-1.jpg",""],alt:["",""],description:"Ljusstake i vit keramik f\xF6r 5 ljus",category:["belysning","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/ljusstake-gra-1.jpg",""],alt:["",""],description:"Ljusstake f\xF6r 10 ljus i betong",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/julstjarna-1.png",""],alt:["",""],description:"R\xF6d julstj\xE4rna 100 cm",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/julduk-paisely-1.png",""],alt:["",""],description:"",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/julduk-rand-1.png",""],alt:["",""],description:"",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/filt-varg-1.jpg",""],alt:["",""],description:"",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/filt-rutig-1.jpg",""],alt:["",""],description:"",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/kudde-tofsar-1.jpg",""],alt:["",""],description:"",category:["dekoration","all"]},{name:"",id:3,price:199,originalPrice:199,rating:3,amount:0,sum:0,img:["src/style/shop-imgs/kudde-linne-1.jpg",""],alt:["",""],description:"",category:["dekoration","all"]}],g=document.querySelector(".product-container");for(let t=0;t<a.length;t++){const r=a[t];g.innerHTML+=`
    <article class= "xmas-item"
    <h2>${r.name}</h2>
    <img src="${r.img[0]}" alt="" width="200" height="200">
    </article>`}
