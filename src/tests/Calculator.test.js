import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button4 = container.getByTestId('number4');
    const button1 =container.getByTestId('number1')
    const addButton = container.getByTestId('operator-add')
    const equalsButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract', () => {
    const button4 = container.getByTestId('number4');
    const button7 =container.getByTestId('number7');
    const subButton = container.getByTestId('operator-subtract');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(subButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply numbers', () => {
    const button3 = container.getByTestId('number3');
    const button5 =container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide numbers', () => {
    const button2= container.getByTestId('number2');
    const button1= container.getByTestId('number1');
    const button7 =container.getByTestId('number7');
    const divideButton = container.getByTestId('operator-divide');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to do multiple clicks', () => {
    const button2= container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button2)
    expect(runningTotal.textContent).toEqual('22')

  })
  it('should be able to culculate multiple equasions', () => {
    const button2= container.getByTestId('number2');
    const button7= container.getByTestId('number7');
    const button5 =container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const addButton = container.getByTestId('operator-add')
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(multiplyButton)
    fireEvent.click(button7)
    fireEvent.click(addButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('19')    
  })

  it('shoudl be able to clear', () => {
    const button3= container.getByTestId('number3');
    const button8= container.getByTestId('number8');
    const button7= container.getByTestId('number7');
    const addButton = container.getByTestId('operator-add')
    const equalsButton = container.getByTestId('operator-equals');
    const clearButton = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(addButton)
    fireEvent.click(button8)
    fireEvent.click(equalsButton)
    fireEvent.click(clearButton)
    fireEvent.click(addButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('18')    
   
  })
})





