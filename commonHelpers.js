import{a as L,i as m,S as w}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="https://pixabay.com/api",S="43475278-2a58784aecd56e70c750f20e8";async function h(e,r=1,o=15){const i={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o};try{return(await L.get(`${v}/`,{params:i})).data.hits}catch(t){throw new Error(t.message)}}function E(e){e.style.display="block"}function $(e){e.style.display="none"}function q({webformatURL:e,largeImageURL:r,tags:o,likes:i,views:t,comments:s,downloads:l}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img class="gallery-image" src="${e}" alt="${o}" width="360" height="240" />
    <ul class="property-list">
      <li class="property-item">
        <p class="property-title">Likes</p>
        <p class="property-value">${i}</p>
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

  `}function y(e){e.innerHTML=""}function p(){m.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later.",position:"topRight"})}function x(){return new w(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function d(){m.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const f=document.querySelector(".loader-container"),u=document.getElementById("form"),a=document.querySelector(".ul-group"),n=document.querySelector(".load-more-btn");u.addEventListener("submit",I);n.style.display="none";let c=1,g="";async function I(e){e.preventDefault(),E(f),y(a),c=1;const r=u.elements.img.value.trim();g=r;try{const o=await h(r,c,15);o.length===0?(n.style.display="none",y(a),p()):(b(o),o.length<15?n.style.display="none":n.style.display="block")}catch(o){console.error(o),p()}finally{$(f),u.reset()}}function b(e){e.forEach(o=>{const i=q(o);a.insertAdjacentHTML("beforeend",i)}),x().refresh()}n.addEventListener("click",O);async function O(){c++;try{const e=await h(g,c);if(e.length===0)n.style.display="none",d();else{b(e),e.length<15&&(n.style.display="none",d());const r=a.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch(e){console.error(e),p()}}
//# sourceMappingURL=commonHelpers.js.map
