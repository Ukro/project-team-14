(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),l=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",l),d.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector("[data-buy-modal-open]"),closeModalBtn:document.querySelector("[data-buy-modal-close]"),modal:document.querySelector("[data-buy-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[subscribe-data-modal-close]"),modal:document.querySelector("[subscribe-data-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-reviews-modal-open]"),closeModalBtn:document.querySelector("[data-reviews-modal-close]"),modal:document.querySelector("[data-reviews-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{pagination:{el:".swiper-pagination",type:"bullets"},spaceBetween:18,mousewheel:{invert:!0,sensitivity:1},breakpoints:{320:{slidesPerView:1},767:{slidesPerView:2.6},1200:{slidesPerView:4}}});