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
    const divElement = compiled.querySelector('div'); // Coge por defecto sólo el primer elemento <div>
    // Se crea un string con las clases que queremos comprobar y se convierte em un array de strings por cada clase css
    const cssClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');

    // Comprobamos que el elemento <div> tiene las clases indicadas en el string cssClasses.
    // El divElement? tiene una interrogación para comprobar si tiene una clase determinada. Si es nulo, la prueba falla.
    // classlist devuelve un objeto DOMTokenList que contiene los nombres de todas las clases del elemento.
    // Pero también un value que devuelve un string con todas las clases del elemento separadas por espacios.

    // Podríamos intentar:
    // expect( divElement?.classList.value).toBe(cssClasses); // Pero no es buena práctica. Es muy rígido.

    // Alternativa:
    // Comprueba primero que no sea nulo el divElement y luego comprueba que contiene las clases.
    // divElement?.classList.forEach((className) => {
    //   expect(cssClasses).toContain(className);
    // });

    // Otra alternativa:
    // Extraemos las clases del div con divClasses.
    // Extraemos las clases del div y las compara con el array cssClasses.
    const divClasses = divElement?.classList.value.split(' ');

    expect(divElement).not.toBeNull();

    cssClasses.forEach((className) => {
      expect(divClasses).toContain(className);
    });



  });
});
