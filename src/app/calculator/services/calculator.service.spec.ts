import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {

  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    // Al inicio, y según las señales, deben ser inicializadas a 0 y el último operador a '+'
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set initial signals when C is pressed', () => {
    // Iniciamos los valores
    service.resultText.set('123');
    service.subResultText.set('456');
    service.lastOperator.set('*');
    // Luego, pulsamos C
    service.constructNumber('C');
    // Los valores deben ser reseteados a 0 y el último operador a '+'
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

});
