import './sass/main.scss'

import { HeaderComponent } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Presentation } from './components/Presentation/Presentation'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { GeneralSection } from './components/GeneralSection/GeneralSection'
import { Enterprice } from './components/Enterprice/Enterprice'


function App() {

  const enterprices = [
    <Enterprice img="https://www.inoma.mx/wp-content/uploads/2016/02/logo_inoma.png"/>,
    <Enterprice img="https://taktaktak.com/assets/images/tak-tak-tal-logo.png"/>,
    <Enterprice img="https://www.pegasus.com.mx/wp-content/uploads/2019/10/logo-pegasus-e-commerce.png"/>,
    <Enterprice img="https://benandfrank.com/web/image/res.company/1/logo?unique=6dab208"/>
  ]

  return (
    <main>
      <HeaderComponent/>
      <Hero/>
      <Presentation/>
      <Skills/>
      <GeneralSection title="experience" subtitle='' components={enterprices}/>
      <Footer/>
    </main>
  );
}

export default App;
