import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Shoes from './Shoes';

test('Shoes Component - allows user to choose shoe size for each player', () => {
  let mockShoes = [{ id: '1', size: '' }, { id: '2', size: '' }];

  const updateSize = (shoeIdToUpdate, newSize) => {
    mockShoes = mockShoes.map(shoe =>
      shoe.id === shoeIdToUpdate ? { ...shoe, size: newSize } : shoe
    );
  };

  const addShoe = (newShoeId) => {
    const newShoe = { id: newShoeId, size: '' };
    mockShoes.push(newShoe);
  };

  const removeShoe = (shoeId) => {
    mockShoes = mockShoes.filter(shoe => shoe.id !== shoeId);
  };

  const shoesComponentProps = {
    updateSize,
    addShoe,
    removeShoe,
    shoes: mockShoes
  };

  const { getAllByRole, getByRole, rerender } = render(<Shoes {...shoesComponentProps} />);

  // Test adding a shoe
  fireEvent.click(getByRole('button', { name: '+' }));
  rerender(<Shoes {...shoesComponentProps} shoes={mockShoes} />);
  expect(mockShoes.length).toBe(3);

  // Test updating a shoe size
  const inputs = getAllByRole('textbox');
  fireEvent.change(inputs[0], { target: { value: '10' } });
  updateSize('1', '10');
  rerender(<Shoes {...shoesComponentProps} shoes={mockShoes} />);
  expect(mockShoes.find(shoe => shoe.id === '1').size).toBe('10');

  // Test removing a shoe
  const removeButtons = getAllByRole('button', { name: '-' });
  fireEvent.click(removeButtons[0]);
  removeShoe('1');
  rerender(<Shoes {...shoesComponentProps} shoes={mockShoes} />);
  expect(mockShoes.length).toBe(2);
  expect(mockShoes.find(shoe => shoe.id === '1')).toBeUndefined();
});

test('Shoes Component - allows user to remove a shoe size field', () => {
  let mockShoes = [{ id: '1', size: '' }, { id: '2', size: '' }];

  const updateSize = (shoeIdToUpdate, newSize) => {
    mockShoes = mockShoes.map(shoe =>
      shoe.id === shoeIdToUpdate ? { ...shoe, size: newSize } : shoe
    );
  };

  const addShoe = (newShoeId) => {
    const newShoe = { id: newShoeId, size: '' };
    mockShoes.push(newShoe);
  };

  const removeShoe = (shoeId) => {
    mockShoes = mockShoes.filter(shoe => shoe.id !== shoeId);
  };

  const shoesComponentProps = {
    updateSize,
    addShoe,
    removeShoe,
    shoes: mockShoes
  };

  const { container, rerender } = render(<Shoes {...shoesComponentProps} />);

  // Initial state check
  expect(container.querySelectorAll('.shoes__form').length).toBe(2);

  // Test removing a shoe
  const removeButton = container.querySelector('.shoes__button--small');
  fireEvent.click(removeButton);

  // Update the state
  removeShoe('1');

  // Re-render the component with updated state
  rerender(<Shoes {...shoesComponentProps} shoes={mockShoes} />);

  // Wait for a short delay to allow the DOM to update
  setTimeout(() => {
    // Check that the field is removed
    const shoeSizeFields = container.querySelectorAll('.shoes__form');
    expect(shoeSizeFields.length).toBe(1);
    expect(screen.queryByText('Shoe size / person 1')).toBeNull();
    expect(screen.queryByText('Shoe size / person 2')).toBeInTheDocument();
  }, 100); // Adjust the delay as needed
});






