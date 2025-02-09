
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorButtonComponent } from "./calculator-button.component";

describe('CalculatorButtonComponent', () => {

  let fixture: ComponentFixture<CalculatorButtonComponent>;
  let compiled: HTMLElement;
  let component: CalculatorButtonComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButtonComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    // Sirve para detección de cambios en el componente para que Angular actualice los estilos
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 doubleSize is false', () => {
    // Tomamos los estilos del componente y verificamos que tienen la clase 'w-1/4'
    const hostCssClasses: string[] = compiled.classList.value.split(' ');
    // La clase 'w-1/4' aparece cuando el botón es doble tamaño. Necsitaría que detecte el cambio en el componente por detectChanges()
    expect(hostCssClasses).toContain('w-1/4');
    // No tiene la clase 'w-2/4' cuando el botón es simple tamaño
    expect(component.isDoubleSize()).toBeFalse();
  });

  it('should apply w-2/4 doubleSize is true', () => {
    // Cambiamos el valor de 'isDoubleSize' en el componente y detectamos los cambios
    fixture.componentRef.setInput('isDoubleSize', true);
    fixture.detectChanges();
    // Tomamos los estilos del componente y verificamos que tienen la clase 'w-2/4'
    const hostCssClasses: string[] = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-2/4');
    expect(component.isDoubleSize()).toBeTruthy();
  });



});
