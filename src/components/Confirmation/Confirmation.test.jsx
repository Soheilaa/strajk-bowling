import { it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Confirmation from './Confirmation'; 


it('displays booking number and total price after confirmation', () => {
  const setConfirmationMock = vi.fn();

  const confirmationDetails = {
    active: true,
    when: '2024-06-01T15:00:00',
    people: 'John Doe',
    lanes: 2,
    id: '1234',
    price: 580,
  };

  const { getByTestId, getByText } = render(
    <Confirmation
      confirmationDetails={confirmationDetails}
      setConfirmation={setConfirmationMock}
    />
  );

  expect(getByTestId("booking-number")).toBeInTheDocument();

  expect(getByText('Total:')).toBeInTheDocument();
  expect(getByText('580 sek')).toBeInTheDocument();

  const button = getByText("Sweet, let's go!");
  fireEvent.click(button);

  expect(setConfirmationMock).toHaveBeenCalled();
});


it('Total amount to be paid must be equal to 120 SEK / person + 100 SEK / lane', () => {
  const setConfirmationMock = vi.fn();

  const numberOfPeople = 3;
  const numberOfLanes = 2;
  const expectedTotal = 120 * numberOfPeople + 100 * numberOfLanes;

  const confirmationDetails = {
    active: true,
    when: '2024-06-01T15:00:00',
    people: numberOfPeople,
    lanes: numberOfLanes,
    id: '1234',
    price: expectedTotal,
  };

  const { getByTestId, getByText, container } = render(
    <Confirmation
      confirmationDetails={confirmationDetails}
      setConfirmation={setConfirmationMock}
    />
  );

  expect(getByTestId("booking-number")).toBeInTheDocument();

  const totalPriceElement = container.querySelector('.confirmation__price p:last-child');
  expect(totalPriceElement).toHaveTextContent(`${expectedTotal} sek`);

  const button = getByText("Sweet, let's go!");
  fireEvent.click(button);

  expect(setConfirmationMock).toHaveBeenCalled();
});