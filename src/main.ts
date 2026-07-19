
import './style.css';
import "iconify-icon";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Loading } from "./components/Loading";
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Audio } from './components/Audio'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
  ${FloatingWhatsApp()}
  ${Loading()}
  ${Navbar()}
  ${Hero()} 
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

window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");

  setTimeout(() => {
    loading?.classList.add("opacity-0");

    setTimeout(() => {
      loading?.remove();
    }, 700);

  }, 1200);
});