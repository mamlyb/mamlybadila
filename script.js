const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false')})}

const revealEls=document.querySelectorAll('.reveal');
revealEls.forEach((el,index)=>{el.style.transitionDelay=`${Math.min(index%6,5)*70}ms`});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
revealEls.forEach(el=>observer.observe(el));

const header=document.querySelector('.site-header');
const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>28);
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});

const heroCard=document.querySelector('.hero-card');
if(heroCard&&window.matchMedia('(pointer:fine)').matches){
  heroCard.addEventListener('mousemove',event=>{
    const rect=heroCard.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    heroCard.style.transform=`perspective(900px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-5px)`;
  });
  heroCard.addEventListener('mouseleave',()=>{heroCard.style.transform=''});
}

const feedback=document.getElementById('feedback');
const vcard=`BEGIN:VCARD
VERSION:3.0
N:Badila;Mamly;;;
FN:Mamly Badila
TITLE:Conformité - Sécurité financière - Gestion de projets
TEL;TYPE=CELL:+242064773223
EMAIL;TYPE=INTERNET:mamlyb93@gmail.com
ADR;TYPE=WORK:;;Brazzaville;;;République du Congo
NOTE:Structurer la confiance, sécuriser la croissance.
END:VCARD`;
document.getElementById('saveContact')?.addEventListener('click',()=>{const blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Mamly-Badila.vcf';a.click();URL.revokeObjectURL(url);if(feedback)feedback.textContent='Le contact a été préparé pour téléchargement.'});
document.getElementById('copyLink')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(window.location.href);if(feedback)feedback.textContent='Lien copié.'}catch{if(feedback)feedback.textContent='Copie impossible sur ce navigateur.'}});
document.getElementById('shareCard')?.addEventListener('click',async()=>{if(navigator.share){await navigator.share({title:'Carte professionnelle de Mamly Badila',text:'Découvrez la carte professionnelle de Mamly Badila.',url:window.location.href})}else if(feedback){feedback.textContent='Le partage natif n’est pas disponible ici. Utilise « Copier le lien ».'}});

const layoutFix=document.createElement('style');layoutFix.textContent=`
.hero{grid-template-columns:minmax(0,1fr) minmax(360px,520px);gap:clamp(36px,5vw,72px);min-height:auto;padding-top:72px;padding-bottom:72px}
.hero-copy{max-width:820px}.hero h1{font-size:clamp(48px,5.2vw,76px);line-height:1.03;letter-spacing:-.025em}.hero-card{padding:12px;border:1px solid rgba(200,169,107,.35);border-radius:3px;overflow:hidden}.hero-card img{aspect-ratio:4/5;object-fit:cover;object-position:center 22%;background:#172437}.hero-card div{padding:18px 10px 10px}
@media(max-width:1180px){.hero{grid-template-columns:1fr 420px}.hero h1{font-size:clamp(44px,5vw,66px)}}
@media(max-width:900px){.hero{grid-template-columns:1fr}.hero-card{max-width:520px;width:100%;margin:0 auto}.hero h1{font-size:clamp(42px,9vw,62px)}}
@media(max-width:560px){.hero{padding-top:48px}.hero h1{font-size:42px}.kicker{line-height:1.7}.hero-card{padding:8px}}
`;document.head.appendChild(layoutFix);
