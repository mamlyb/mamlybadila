const fontLink=document.createElement('link');fontLink.rel='stylesheet';fontLink.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';document.head.appendChild(fontLink);
const typography=document.createElement('style');typography.textContent=`
body,button,input,textarea,.nav,.btn{font-family:'Montserrat',Arial,sans-serif}
h1,h2,h3,.lead,.publication-card blockquote,.brand-mark{font-family:'Montserrat',Arial,sans-serif}
.hero h1{font-weight:700;letter-spacing:-.045em;line-height:1.02}
.section-title h2,.contact-box h2{font-weight:700;letter-spacing:-.03em}
.expertise-grid h3,.projects h3,.vision-grid h3,.hero-card h2{font-weight:600;letter-spacing:-.02em}
.lead,.publication-card blockquote{font-weight:500}
.kicker,.section-title>p,.section-title>span,.projects small,.badge{font-weight:700;letter-spacing:.16em}
body{font-weight:400}.intro,.story-grid>div p,.publication-card p{font-weight:400}
.brand{font-weight:700}.nav{font-weight:600}
`;
document.head.appendChild(typography);

const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false')})}const revealEls=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});revealEls.forEach(el=>observer.observe(el));const feedback=document.getElementById('feedback');const vcard=`BEGIN:VCARD
VERSION:3.0
N:Badila;Mamly;;;
FN:Mamly Badila
TITLE:Conformité - Sécurité financière - Gestion de projets
TEL;TYPE=CELL:+242064773223
EMAIL;TYPE=INTERNET:mamlyb93@gmail.com
ADR;TYPE=WORK:;;Brazzaville;;;République du Congo
NOTE:Structurer la confiance, sécuriser la croissance.
END:VCARD`;document.getElementById('saveContact')?.addEventListener('click',()=>{const blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Mamly-Badila.vcf';a.click();URL.revokeObjectURL(url);if(feedback)feedback.textContent='Le contact a été préparé pour téléchargement.'});document.getElementById('copyLink')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(window.location.href);if(feedback)feedback.textContent='Lien copié.'}catch{if(feedback)feedback.textContent='Copie impossible sur ce navigateur.'}});document.getElementById('shareCard')?.addEventListener('click',async()=>{if(navigator.share){await navigator.share({title:'Carte professionnelle de Mamly Badila',text:'Découvrez la carte professionnelle de Mamly Badila.',url:window.location.href})}else if(feedback){feedback.textContent='Le partage natif n’est pas disponible ici. Utilise « Copier le lien ».'}});
const layoutFix=document.createElement('style');layoutFix.textContent=`
.hero{grid-template-columns:minmax(0,1fr) minmax(360px,520px);gap:clamp(36px,5vw,72px);min-height:auto;padding-top:72px;padding-bottom:72px}
.hero-copy{max-width:820px}.hero h1{font-size:clamp(48px,5.2vw,76px);line-height:1.03;letter-spacing:-.025em}.hero-card{padding:12px;border:1px solid rgba(200,169,107,.35);border-radius:3px;overflow:hidden}.hero-card img{aspect-ratio:4/5;object-fit:cover;object-position:center 22%;background:#172437}.hero-card div{padding:18px 10px 10px}
@media(max-width:1180px){.hero{grid-template-columns:1fr 420px}.hero h1{font-size:clamp(44px,5vw,66px)}}
@media(max-width:900px){.hero{grid-template-columns:1fr}.hero-card{max-width:520px;width:100%;margin:0 auto}.hero h1{font-size:clamp(42px,9vw,62px)}}
@media(max-width:560px){.hero{padding-top:48px}.hero h1{font-size:42px}.kicker{line-height:1.7}.hero-card{padding:8px}}
`;document.head.appendChild(layoutFix);

const motionStyle=document.createElement('style');motionStyle.textContent=`
@keyframes heroGlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes floatPortrait{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
.hero{background-size:180% 180%;animation:heroGlow 14s ease-in-out infinite}.hero-copy.visible{animation:fadeSlide .9s ease both}.hero-card.visible{animation:fadeSlide 1s .12s ease both,floatPortrait 7s 1.2s ease-in-out infinite}.hero-card img{transition:transform .7s ease,filter .7s ease}.hero-card:hover img{transform:scale(1.035);filter:saturate(1.04)}
.expertise-grid article,.projects article,.vision-grid div,.publication-card{transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}.expertise-grid article:hover,.projects article:hover,.vision-grid div:hover,.publication-card:hover{transform:translateY(-7px);box-shadow:0 20px 45px rgba(0,0,0,.22);border-color:rgba(200,169,107,.65)}
.btn{position:relative;overflow:hidden;transition:transform .25s ease,background .25s ease,color .25s ease,box-shadow .25s ease}.btn:before{content:'';position:absolute;inset:0;transform:translateX(-120%);background:linear-gradient(100deg,transparent,rgba(255,255,255,.22),transparent);transition:transform .55s ease}.btn:hover{transform:translateY(-3px);box-shadow:0 12px 25px rgba(0,0,0,.22)}.btn:hover:before{transform:translateX(120%)}
.nav a{position:relative}.nav a:after{content:'';position:absolute;left:0;right:100%;bottom:-6px;height:1px;background:var(--gold);transition:right .3s ease}.nav a:hover:after{right:0}.brand-mark{transition:transform .4s ease,background .4s ease}.brand:hover .brand-mark{transform:rotate(8deg);background:rgba(200,169,107,.12)}
.site-header{transition:padding .3s ease,background .3s ease,box-shadow .3s ease}.site-header.scrolled{padding-top:11px;padding-bottom:11px;box-shadow:0 10px 30px rgba(0,0,0,.2)}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;document.head.appendChild(motionStyle);
const header=document.querySelector('.site-header');const portrait=document.querySelector('.hero-card');window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>40),{passive:true});if(portrait&&matchMedia('(pointer:fine)').matches){portrait.addEventListener('mousemove',e=>{const r=portrait.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;portrait.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg)`});portrait.addEventListener('mouseleave',()=>portrait.style.transform='')}
