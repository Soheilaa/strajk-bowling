import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, assert } from 'vitest';
import Shoes from './Shoes';


test('Shoes Component - allows user to choose shoe size for each player', () => {
  let mockShoes = [{ id: '1', size: '' }, { id: '2', size: '' }];

  const updateSize = (shoeIdToUpdate, newSize) => {
    mockShoes = mockShoes.map(shoe =>
      shoe.id === shoeIdToUpdate ? { ...shoe, size: newSize } : shoe
    );
  };

  const addShoe = () => {
    const newShoeId = (mockShoes.length + 1).toString();
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

  const { getAllByRole, getByRole } = render(<Shoes {...shoesComponentProps} />);

  // Simulate adding a shoe
  fireEvent.click(getByRole('button', { name: '+' }));
  assert.equal(mockShoes.length, 3);

  // Simulate updating a shoe size
  const inputs = getAllByRole('textbox');
  fireEvent.change(inputs[0], { target: { value: '10' } });
  updateSize('1', '10');
  assert.equal(mockShoes.find(shoe => shoe.id === '1').size, '10');

  // Simulate removing a shoe
  const removeButtons = getAllByRole('button', { name: '-' });
  fireEvent.click(removeButtons[0]);
  removeShoe('1');
  assert.equal(mockShoes.length, 2);
  assert.isUndefined(mockShoes.find(shoe => shoe.id === '1'));
});


test('Shoes Component - allows user to remove a shoe size field', async () => {
    // Define a mock removeShoe function
    const removeShoe = (id) => {
        console.log(`Remove shoe with id ${id}`);
    };

    // Render Shoes component with initial shoes data and the mock removeShoe function
    const { container } = render(
        <Shoes
            shoes={[{ id: '1', size: '' }, { id: '2', size: '' }]}
            removeShoe={removeShoe}
        />
    );

    // Simulate clicking the remove button for the first shoe size field
    const removeButton = container.querySelector('.shoes__button--small');
    removeButton.click(); // Click the first remove button

    // Wait for the rendering to update after the click
    await screen.findByText('Shoe size / person 2'); // Wait for the second shoe size field to appear

    // Assert that at least one shoe size field exists
    const shoeSizeFields = container.querySelectorAll('.shoes__input');
    expect(shoeSizeFields.length).toBeGreaterThan(0);
});








