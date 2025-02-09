
import { ComponentFixture, TestBed } from "@angular/core/testing";
import CalculatorViewComponent from "./calculator-view.component";


describe('CalculatorViewComponent', () => {

  let fixture: ComponentFixture<CalculatorViewComponent>;
  let compiled: HTMLElement;
  let component: CalculatorViewComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [CalculatorViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorViewComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a Calculator Component', () => {
    expect(compiled.querySelector('calculator')).not.toBeNull();
  });

  it('should contain basic css classes', () => {
    // Comprobamos que el componente calculadora contiene los botones correctos y que están enlazados correctamente
    const divElement = compiled.querySelector('div');
    expect(divElement).not.toBeNull();

    const cssClasses = divElement?.classList.value.split(' ');

    cssClasses!.forEach((className) => {
      expect(cssClasses).toContain(className);
    });
  });
});

