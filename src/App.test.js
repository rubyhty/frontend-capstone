import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('submits the form data when the submit button is clicked', () => {
    const availableTimes = ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
    const handleSubmit = jest.fn();

    render(<BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />);

    const nameInput = screen.getByLabelText('Name:');
    const phoneInput = screen.getByLabelText('Phone:');
    const emailInput = screen.getByLabelText('Email:');
    const dateInput = screen.getByLabelText('Date:');
    const timeSelect = screen.getByLabelText('Time:');
    const guestsInput = screen.getByLabelText('Number of Guests:');
    const submitButton = screen.getByText('Submit Reservation');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-10' } });
    fireEvent.change(timeSelect, { target: { value: '6:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.click(submitButton);


    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      phone: '1234567890',
      email: 'johndoe@example.com',
      date: '2023-03-10',
      time: '6:00 PM',
      guests: '4',
    });
  });
});