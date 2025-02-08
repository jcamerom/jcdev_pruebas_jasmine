import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  // Tanto fixture como app, o compile, se van a utilizar para la creación de componentes y para la prueba de los componentes.
  // Para refactorizar los tests se utilizan variables y constantes para simplificar y mejorar la legibilidad de los tests.
  let fixture: ComponentFixture<AppComponent>; // Componente de prueba. Es un genérico, por lo que debe contener la instancia del componente.
  let compiled: HTMLElement; // El elemento HTML que contiene el componente de prueba.



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    // Crear un componente de prueba para poder trabajar con ellos en cada prueba.
    fixture = TestBed.createComponent(AppComponent);
    // Obtener el elemento HTML que contiene el componente de prueba y poder trabajar con él en cada prueba.
    compiled = fixture.nativeElement;

  });

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent); -> Ya definido en el beforeEach.
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    // const fixture = TestBed.createComponent(AppComponent); -> Ya definido en el beforeEach.
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    // const fixture = TestBed.createComponent(AppComponent); -> Ya definido en el beforeEach.
    // const compiled = fixture.nativeElement as HTMLElement; -> Ya definido en el beforeEach.

    // Comprobamos que el router-outlet está presente en el HTML y no es nulo.
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
