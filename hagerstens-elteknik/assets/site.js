
document.querySelectorAll('[data-menu]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('.mobilemenu').classList.toggle('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
function mailForm(form, subject){const data=new FormData(form);let body='';for(const [k,v] of data.entries()){if(v) body += k+': '+v+'%0D%0A';} window.location.href='mailto:info@heltek.se?subject='+encodeURIComponent(subject)+'&body='+body; return false;}
