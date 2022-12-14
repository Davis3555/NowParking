import { AppPage } from './app.po';
import { browser, element, by} from 'protractor';//importamos protractor, browser automatiza las pruebas simula al usuario,
                                                 //element sirve para acceder a los elementos de la visual,
                                                 //by obtenermos un elemnto mediante un css etc.

//prueba por defecto


//prueba 1
// se describe el nombre de las pruebas
describe('test a mi app',()=>{
  //configuracion de la prueba
  beforeEach (()=>{    
    //a traves del browser nos dirigimos a la carpeta raiz o atchivo index (principal)
    browser.get("/");
    })
    // funcion prueba 1
    it("el page home se muestra por defecto",()=>{
      //se usa la funcion expect de protractor,
      expect(element(by.css(".tab-selected ion-label")).getText()).toContain("home");
    });
  // aqui va la prueba 2
  
  });


