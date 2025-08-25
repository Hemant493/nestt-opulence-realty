// Mobile menu
const hdr = document.querySelector('.hdr');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => hdr.classList.toggle('open'));
}

// Testimonial slider
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');
let idx = 0;
function show(i){ slides.forEach(s=>s.classList.remove('is-active')); slides[i].classList.add('is-active'); }
if (slides.length){ show(idx); }
if (prev) prev.onclick=()=>{ idx=(idx-1+slides.length)%slides.length; show(idx); };
if (next) next.onclick=()=>{ idx=(idx+1)%slides.length; show(idx); };

// Simple lead handler (replace with real backend/Formspree)
function submitLead(form){
  const data = Object.fromEntries(new FormData(form));
  console.log('Lead:', data);
  alert('Thank you! A property advisor will contact shortly.');
  form.reset();
}
