import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "hello": "Say Hello!",
      "header": "Computer Enginier & Backend Developer",
      "subtitle": "I develop simple and functional things and I love do it",
      "presentation": "Hi, I'm Leo. Nice to meet you",
      "info_presentation": "I'm a computer enginier with 4 years of experience. I has been worked with amazing people helping to develop amazing products as a backend and frontend developer, I'm courious, autodidact, I realy like to improving my chops.",
      "databases": "Databases",
      "database_info": "The database is an escential element in any software system",
      "frontend_info": "The frontend is how the application is looks like for the users,",
      "backend_info": "The backend is the bussisnes logic, the conection with the database, and the application security.",
      "experience": "I'm proud to have collaborated with some awesome companies:",
      "footer": "Living, learning, & leveling up one day at a time."
    }
  },
  es: {
    translation: {
      "hello": "Platiquemos!",
      "header": "Ingeniero en Computación y Desarrollador Backend",
      "subtitle": "Desarrollo cosas simples y funcionales y me encanta hacerlo",
      "presentation": "Hola soy Leo, un gusto conocerte",
      "info_presentation": "Soy un ingeniero en computacion con 4 años de experiencia. He trabajado con gente increible ayudando a desarrollar increibles productos como desarrollador backend y frontend. Soy curioso, autodidacta, me encanta mejorar mis skills",
      "databases": "Bases de datos",
      "database_info": "Las bases de datos son un elemento escencial de cualquier sistema de software",
      "frontend_info": "El frontend is como se vera para el usuario y como el usuario interactuara con el sistema",
      "backend_info": "El backend es la logica del negocio, la coneccion con la base de datos y algunos elementos de seguridad",
      "experience": "Estoy orgulloso de haber colaborado con algunas empresas incleibles",
      "footer": "Vivo, Aprendo y Mejoro un día a la vez"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;