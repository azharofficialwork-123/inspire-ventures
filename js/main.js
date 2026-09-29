const menu=document.querySelector('.menu');
const mobile=document.querySelector('.mobile-links');
if(menu&&mobile) menu.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('.mobile-links a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
function sendInquiry(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const subject=encodeURIComponent(f.get('subject')||'Website Inquiry');
  const body=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')||''}\n\n${f.get('message')}`);
  location.href=`mailto:azhar.inspireventures@gmail.com?subject=${subject}&body=${body}`;
}
/* ==============================
   TOP BAR SHOW / HIDE ON SCROLL
   ============================== */

let lastScrollTop = 0;

const topBar = document.querySelector('.top-bar');
const mainHeader = document.querySelector('.header');

window.addEventListener('scroll', function () {

  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  /* Bilkul top par */
  if (currentScroll <= 10) {
    topBar.classList.remove('hide');
    mainHeader.classList.remove('header-up');
    lastScrollTop = currentScroll;
    return;
  }

  /* Scroll DOWN */
  if (currentScroll > lastScrollTop) {
    topBar.classList.add('hide');
    mainHeader.classList.add('header-up');
  }

  /* Scroll UP */
  else if (currentScroll < lastScrollTop) {
    topBar.classList.remove('hide');
    mainHeader.classList.remove('header-up');
  }

  lastScrollTop = currentScroll;
});
