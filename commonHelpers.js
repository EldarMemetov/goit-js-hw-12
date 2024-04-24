import{a as L,i as f,S as w}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="https://pixabay.com/api",S="43475278-2a58784aecd56e70c750f20e8";async function g(t,o=1,s=15){const i={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s};try{return(await L.get(`${v}/`,{params:i})).data.hits}catch(e){throw new Error(e.message)}}function E(t){t.style.display="block"}function x(t){t.style.display="none"}function $({webformatURL:t,largeImageURL:o,tags:s,likes:i,views:e,comments:r,downloads:a}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${t}" alt="${s}" width="360" height="240" />
    <ul class="property-list">
      <li class="property-item">
        <p class="property-title">Likes</p>
        <p class="property-value">${i}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Views</p>
        <p class="property-value">${e}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Comments</p>
        <p class="property-value">${r}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Downloads</p>
        <p class="property-value">${a}</p>
      </li>
    </ul>  
  </a>
</li>

  `}function y(t){t.innerHTML=""}function u(){f.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later.",position:"topRight"})}function q(){return new w(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function d(){f.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const m=document.querySelector(".loader-container"),c=document.getElementById("form"),p=document.querySelector(".ul-group"),n=document.querySelector(".load-more-btn");c.addEventListener("submit",I);n.style.display="none";let l=1;const h=15,P=15;async function I(t){t.preventDefault(),E(m),y(p);const o=c.elements.img.value.trim();try{const s=await g(o,l,h);s.length===0?(n.style.display="none",y(p),u()):(b(s),n.style.display="block")}catch(s){console.error(s),u()}finally{x(m),c.reset()}}function b(t){t.forEach(s=>{const i=$(s);p.insertAdjacentHTML("beforeend",i)}),q().refresh()}n.addEventListener("click",O);async function O(){l++;try{if(l>P){d(),n.style.display="none";return}const t=await g(c.elements.img.value.trim(),l,h);if(t.length===0)n.style.display="none",d();else{b(t),n.style.display="block";const o=p.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}catch(t){console.error(t),u()}}
//# sourceMappingURL=commonHelpers.js.map
