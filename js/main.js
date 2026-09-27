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
