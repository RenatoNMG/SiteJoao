const modal=document.getElementById('modal');
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');

function openCar(name){
  document.getElementById('modalTitle').textContent=name;
  modal.classList.add('show');
}
function closeCar(){
  modal.classList.remove('show');
}

modal.addEventListener('click',e=>{
  if(e.target===modal) closeCar();
});

function closeMenu(){
  nav.classList.remove('mobile');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Abrir menu');
}

menu.addEventListener('click',()=>{
  const isOpen=nav.classList.toggle('mobile');
  menu.setAttribute('aria-expanded',String(isOpen));
  menu.setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu');
});

nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const msg='Olá, João Valdomiro! Meu nome é '+f.get('name')+'. Tenho interesse em: '+(f.get('interest')||'atendimento')+'. WhatsApp: '+f.get('phone')+'. '+(f.get('message')||'');
  window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');
});