
import './style.css';
import "iconify-icon";


import AOS from 'aos';
import 'aos/dist/aos.css';


import { ScrollProgress } from './components/ScrollProgress'
import { FloatingWhatsApp } from'../FloatingWhatsApp'
import { BackToTop } from './components/BackToTop'
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedWorks } from './components/FeaturedWorks'
import { Showreel } from './components/Showreel'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Audio } from './components/Audio'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

const typingText = document.getElementById("typing-text");

const texts = [
  "🎙️ Voice Talent",
  "🎤 Public Speaker",
  "🎬 Content Creator",
  "🎓 Communication Student",
];

let index = 0;

setInterval(() => {
  if (!typingText) return;

  index = (index + 1) % texts.length;

  typingText.style.opacity = "0";

  setTimeout(() => {
    typingText.textContent = texts[index];
    typingText.style.opacity = "1";
  }, 300);

}, 2500);


  
  ${ScrollProgress()}
  ${FloatingWhatsApp()}
  ${BackToTop()}
  ${Loading()}
  ${Navbar()}
  ${Hero()} 
  ${FeaturedWorks()}
  ${Showreel()} 
  ${Skills()}
  ${About()}
  ${Portfolio()}
  ${Audio()}
  ${Stats()}
  ${Contact()}
  ${Footer()}
`;

AOS.init({
  duration: 1000,
  once: true,
});

const backToTop = document.getElementById("back-to-top") as HTMLButtonElement;

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  setTimeout(() => {
    loading?.classList.add("opacity-0");

    setTimeout(() => {
      loading?.remove();
    }, 700);

  }, 1200);
});

