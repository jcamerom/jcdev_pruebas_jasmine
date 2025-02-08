import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  // it('should render router-outlet wrapped by a div with class "container"', () => {
  //   Comprobamos que el router-outlet está presente en un div con la clase "container" y no es nulo.
  //   Parece correcto, pero no se pueden dos veces en un mismo elemento de DOM que contenga el mismo elemento.
  //   expect(compiled.querySelector('.container > router-outlet')).not.toBeNull();
  // });

  it('should render div with css classes', () => {
    // Encuentra el primer elemento <div> en el DOM.
    const divElement = compiled.querySelector('div');
    // Comprobamos que no sea nulo el divElement y luego comprueba que contiene las clases con un forEach.
    expect(divElement).not.toBeNull();

    // Podríamos intentar:
    // Creamos un string con todas las clases del elemento.
    // const cssClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5';

    // El divElement? tiene una interrogación para comprobar si tiene una clase determinada. Si es nulo, la prueba falla.
    // classlist devuelve un objeto DOMTokenList que contiene los nombres de todas las clases del elemento.
    // Pero también un value que devuelve un string con todas las clases del elemento separadas por espacios.
    // expect(divElement?.classList.value).toBe(cssClasses);
    // Pero no es buena práctica. Es muy rígido. Si cambian las clases, la prueba fallará.

    // Alternativa dinámica:
    // El string se convierte em un array de strings por cada clase css con ".split(' ')".
    // const cssClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');
    // Comprueba primero que no sea nulo el divElement y luego comprueba que contiene las clases con un forEach.
    // divElement?.classList.forEach((className) => {
    //   expect(cssClasses).toContain(className);
    // });
    // Pero también es muy rígido. Si se agregan mas clases, la prueba fallará.

    // Mejor alternativa:
    // Extraemos las clases del div con divClasses. Como antes pasaba que no era nulo,
    // ahora podemos usar la exclamación para ver si contiene la clase.
    const cssClasses = divElement!.classList.value.split(' ');
    cssClasses.forEach((className) => {
      expect(divElement!.classList).toContain(className);
    });
  });

  it('should contain the -buy me a beer link-', ()=> {
    // Buscamos el segundo elemento de la lista de elementos <div> y extraemos el enlace con title="Buy me a beer" y href="https://www.buymeac
    const divElement = compiled.querySelectorAll('div')[1];
    // Aquí seleccionamos el elemento "a" que contiene el title "Buy me a beer"
    const anchorElement = divElement?.querySelector('a');
    // Comprobamos que el enlace no es nulo
    expect(divElement).not.toBeNull();
    // Comprobamos que el title del enlace es "Buy me a beer"
    expect(anchorElement?.title).toEqual('Buy me a beer');
    // Comprobamos que el href del enlace es "https://www.buymeacoffee.com/scottwindon"
    expect(anchorElement?.getAttribute('href')).toEqual('https://www.buymeacoffee.com/scottwindon');

  });



});
