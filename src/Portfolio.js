import './sass/main.scss'

import { HeaderComponent } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Presentation } from './components/Presentation/Presentation'

function App() {
  return (
    <main>
      <HeaderComponent/>
      <Hero/>
      <Presentation/>
    </main>
  );
}

export default App;
