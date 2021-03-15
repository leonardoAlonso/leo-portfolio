import './sass/main.scss'

import { HeaderComponent } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Presentation } from './components/Presentation/Presentation'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'

function App() {
  return (
    <main>
      <HeaderComponent/>
      <Hero/>
      <Presentation/>
      <Skills/>
      <Experience/>
    </main>
  );
}

export default App;
