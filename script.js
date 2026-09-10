
const menuBtn=document.querySelector('.menu');const mobileMenu=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>mobileMenu?.classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobileMenu?.classList.remove('open')));
let lang='en';document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>{lang=lang==='en'?'fr':'en';document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-fr]').forEach(el=>el.textContent=el.dataset[lang]);document.querySelectorAll('.lang').forEach(b=>b.textContent=lang==='en'?'FR':'EN')}));
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
