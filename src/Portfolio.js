import './sass/main.scss'

import { HeaderComponent } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Presentation } from './components/Presentation/Presentation'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'


function App() {
  return (
    <main>
      <HeaderComponent/>
      <Hero/>
      <Presentation/>
      <Skills/>
      <Experience/>
      <Footer/>
    </main>
  );
}

export default App;
