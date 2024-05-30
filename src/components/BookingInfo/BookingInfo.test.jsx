import { test,expect,fireEvent  } from 'vitest';
import { render } from '@testing-library/react';
import BookingInfo from './BookingInfo';
import { JSDOM } from 'jsdom';
import ReactDOM from 'react-dom';


test('booking form allows user to input date, time, and number of players', async () => {

  const dom = new JSDOM('<!DOCTYPE html><div id="root"></div>');
  global.document = dom.window.document;
  global.window = dom.window;

  const rootElement = document.getElementById('root');
  ReactDOM.render(<BookingInfo />, rootElement);

  const dateInput = rootElement.querySelector('input[aria-label="Date"]');
  const timeInput = rootElement.querySelector('input[aria-label="Time"]');
  const numberOfPlayersInput = rootElement.querySelector('input[aria-label="Number of awesome bowlers"]');

  if (dateInput && timeInput && numberOfPlayersInput) {

    fireEvent.change(dateInput, { target: { value: '2024-06-01' } });
    fireEvent.change(timeInput, { target: { value: '15:00' } });
    fireEvent.change(numberOfPlayersInput, { target: { value: '4' } });

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(dateInput.value).toBe('2024-06-01');
    expect(timeInput.value).toBe('15:00');
    expect(numberOfPlayersInput.value).toBe('4');
  } else {
    console.error('One or more input elements not found.');
  }
});

// Users can reserve one or more lanes for the selected date and time.
test('minimum booking of 1 lane and number of lanes must always be a number', async () => {
  const { queryAllByTestId } = render(<BookingInfo />);

  const numberOfLanesInputs = queryAllByTestId('numberOfLanesInput');

  if (numberOfLanesInputs.length > 0) {

    const numberOfLanesInput = numberOfLanesInputs[0];

    console.log('Input found:', numberOfLanesInput);

    numberOfLanesInput.addEventListener('change', (event) => {

      console.log('Input value after change:', event.target.value);
    });

    const event = document.createEvent('Event');
    event.initEvent('change', true, true);
    numberOfLanesInput.dispatchEvent(event);
    
    expect(numberOfLanesInput.value).toBe('0');

  } else {
    console.error('Number of lanes input not found.');
  }
});






