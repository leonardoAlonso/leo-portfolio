import './sass/main.scss'

import { HeaderComponent } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Presentation } from './components/Presentation/Presentation'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { Experience } from './components/Experience/Experience'
import { Blog } from './components/Blog/Blog'


function App() {

  return (
    <main>
      <HeaderComponent/>
      <Hero/>
      <Presentation/>
      <Skills/>
      <Blog/>
      <Experience/>
      <Footer/>
    </main>
  );
}

export default App;
