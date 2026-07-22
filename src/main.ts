
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
import { Services } from './components/Services'
import { VideoGallery } from './components/VideoGallery'
import { VideoModal } from './components/VideoModal'
import { Showreel } from './components/Showreel'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import { Timeline } from './components/Timeline'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Audio } from './components/Audio'
import { FAQ } from './components/FAQ'
import { Stats } from './components/Stats'
import { CallToAction } from './components/CallToAction'
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
  ${Services()} 
  ${VideoGallery()} 
  ${VideoModal()}
  ${Showreel()} 
  ${Skills()}
  ${Testimonials()}
  ${Timeline()}
  ${About()}
  ${Portfolio()}
  ${Audio()}
  ${FAQ()}
  ${Stats()}
  ${CallToAction()}
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

document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling as HTMLElement;
    const icon = button.querySelector("span:last-child") as HTMLElement;

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";
  });
});

const modal = document.getElementById("video-modal")!;
const popupVideo = document.getElementById("popup-video") as HTMLVideoElement;
const videoSource = document.getElementById("video-source") as HTMLSourceElement;
const closeVideo = document.getElementById("close-video")!;

(window as any).openVideo = (src: string) => {

videoSource.src = src;

popupVideo.load();

modal.classList.remove("hidden");
modal.classList.add("flex");

popupVideo.play();

};

closeVideo.addEventListener("click", () => {

popupVideo.pause();

popupVideo.currentTime = 0;

modal.classList.remove("flex");
modal.classList.add("hidden");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

popupVideo.pause();

popupVideo.currentTime=0;

modal.classList.remove("flex");

modal.classList.add("hidden");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popupVideo.pause();

popupVideo.currentTime=0;

modal.classList.remove("flex");

modal.classList.add("hidden");

}

});