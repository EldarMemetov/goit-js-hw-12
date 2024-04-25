import{a as L,i as h,S as v}from"./assets/vendor-d28dd3c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const E="https://pixabay.com/api",S="43475278-2a58784aecd56e70c750f20e8";async function g(e,r=1,o=15){const n={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o};try{return(await L.get(`${E}/`,{params:n})).data.hits}catch(t){throw new Error(t.message)}}function k(e){e.style.display="block"}function q(e){e.style.display="none"}function $({webformatURL:e,largeImageURL:r,tags:o,likes:n,views:t,comments:s,downloads:l}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img class="gallery-image" src="${e}" alt="${o}" width="360" height="240" />
    <ul class="property-list">
      <li class="property-item">
        <p class="property-title">Likes</p>
        <p class="property-value">${n}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Views</p>
        <p class="property-value">${t}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Comments</p>
        <p class="property-value">${s}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Downloads</p>
        <p class="property-value">${l}</p>
      </li>
    </ul>  
  </a>
</li>

  `}function d(e){e.innerHTML=""}function y(){h.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later.",position:"topRight"})}function x(){return new v(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function f(){h.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const m=document.querySelector(".loader-container"),u=document.getElementById("form"),a=document.querySelector(".ul-group"),i=document.querySelector(".load-more-btn"),c=document.querySelector(".back-to-top-btn");u.addEventListener("submit",B);i.style.display="none";c.style.display="none";let p=1,w="";async function B(e){e.preventDefault(),k(m),d(a),p=1;const r=u.elements.img.value.trim();w=r;try{const o=await g(r,p,15);o.length===0?(i.style.display="none",d(a),y()):(b(o),o.length<15?i.style.display="none":i.style.display="block")}catch(o){console.error(o),y()}finally{q(m),u.reset()}}function b(e){e.forEach(o=>{const n=$(o);a.insertAdjacentHTML("beforeend",n)}),x().refresh()}i.addEventListener("click",I);async function I(){p++;try{const e=await g(w,p);if(e.length===0)i.style.display="none",f();else{b(e),e.length<15&&(i.style.display="none",f());const r=a.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch(e){console.error(e),y()}}window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.style.display="block":c.style.display="none"});c.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
