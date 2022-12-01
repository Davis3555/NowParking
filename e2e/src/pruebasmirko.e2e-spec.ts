import { browser, element, by} from 'protractor';//importamos protractor, browser automatiza las pruebas simula al usuario,
                                                 //element sirve para acceder a los elementos de la visual,
                                                 //by obtenermos un elemnto mediante un css etc.

//prueba por defecto



// se describe el nombre de las pruebas
describe('test a mi app',()=>{
  //configuracion de la prueba
  beforeEach (()=>{    
    //a traves del browser nos dirigimos a la carpeta raiz o atchivo index (principal)
    browser.get("/index");
  })
// Prueba 1
    it("El login se muestra por defecto",()=>{
      expect(element(by.css(".login-selected ion-label")).getText()).toContain("login");
      browser.driver.sleep(500);
    });
    
// Prueba 2
    it("completar campo usuario",()=>{
      expect(element(by.name("password")).click());
      expect(element(by.xpath('//')).sendKeys('Mirko'));
      browser.driver.sleep(500);
    });
// Prueba 3
    it("Apretar boton registrarse",()=>{
      expect(element(by.name("registro1")).click());
      expect(element(by.id('//*[@id="[registro]"]/app-login/ion-content/ion-card/ion-card-content/ion-item/ion-input/input)')).sendKeys('mirko'));
      browser.driver.sleep(500);  
    });
    
// Prueba 4  
    it("prueba de error",()=>{
      expect(element(by.className("ion-text-right")).getText()).toContain("prueba");
      browser.driver.sleep(1000);
    });
});


