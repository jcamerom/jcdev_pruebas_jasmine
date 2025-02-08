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

  it('should update resultText with number input', () => {

    // Si pulsamos un número, el resultado debe actualizarse
    service.constructNumber('1');
    expect(service.resultText()).toBe('1');

    service.constructNumber('2');
    expect(service.resultText()).toBe('12');
  });

  it('should handle operators correctly', () => {

    // Si pulsamos un operador, el resultado debe actualizarse y el subResultText debe ser reseteado
    service.constructNumber('1');
    service.constructNumber('-');

    expect(service.lastOperator()).toBe('-');
    expect(service.subResultText()).toBe('1');
    expect(service.resultText()).toBe('0');
  });

  it('should calculate result correctly for addition', () => {

    // Si realizamos una suma, el resultado debe actualizarse
    service.constructNumber('1');
    service.constructNumber('+');
    service.constructNumber('4');
    service.constructNumber('=');

    expect(service.resultText()).toBe('5');
  });

  it('should calculate result correctly for subtraction', () => {

    // Si realizamos una resta, el resultado debe actualizarse
    service.constructNumber('4');
    service.constructNumber('-');
    service.constructNumber('3');
    service.constructNumber('=');

    expect(service.resultText()).toBe('1');
  });

  it('should calculate result correctly for multiplication', () => {

    // Si realizamos una multiplicación, el resultado debe actualizarse
    service.constructNumber('4');
    service.constructNumber('*');
    service.constructNumber('3');
    service.constructNumber('=');

    expect(service.resultText()).toBe('12');
  });

  it('should calculate result correctly for division', () => {
    // Si realizamos una división, el resultado debe actualizarse
    service.constructNumber('1')
    service.constructNumber('2');
    service.constructNumber('/');
    service.constructNumber('3');
    service.constructNumber('=');

    expect(service.resultText()).toBe('4');
  });

  it('should handle decimal point correctly', () => {
    // Si realizamos una división, el resultado debe actualizarse
    service.constructNumber('1')
    service.constructNumber('.');
    service.constructNumber('6');
    service.constructNumber('3');

    expect(service.resultText()).toBe('1.63');

    service.constructNumber('.');

    expect(service.resultText()).toBe('1.63');

  });

  it('should handle decimal point correctly starting with zero', () => {
    // Si pulsamos un punto decimal, el resultado debe actualizarse
    service.constructNumber('0')
    service.constructNumber('.');
    service.constructNumber('6');
    service.constructNumber('3');

    expect(service.resultText()).toBe('0.63');
    // Y si seguimos pulsando punto decimal, el resultado debe seguir siendo el mismo
    service.constructNumber('.');

    expect(service.resultText()).toBe('0.63');
    // Si pulsamos un cero y el punto decimal, el resultado debe seguir siendo el mismo
    service.constructNumber('0');
    service.constructNumber('.');
    service.constructNumber('2');

    expect(service.resultText()).toBe('0.6302');
  });

  it('should handle sign change correctly', () => {
    // Si `pulsamos +/-`, el resultado debe cambiar de signo
    service.constructNumber('1')
    service.constructNumber('+/-');

    expect(service.resultText()).toBe('-1');
    // Si `pulsamos +/-` nuevamente, el resultado debe cambiar de signo de nuevo
    service.constructNumber('+/-');

    expect(service.resultText()).toBe('1');
  });

  it('should handle sign change correctly', () => {
    // Si pulsamos `Backspace`, el resultado debe quitar el último carácter
    service.resultText.set('123');
    service.constructNumber('Backspace');

    expect(service.resultText()).toBe('12');
    // Si pulsamos 'Backspace' nuevamente, el resultado debe quitar el último carácter de nuevo
    service.constructNumber('Backspace');

    expect(service.resultText()).toBe('1');
  });

});
