const validation = (allCheckoutData) => {
  const {
    email, phone, starch, cartItems, scheduled, totalPrice, name,
  } = allCheckoutData;

  try {
    if (!email) {
      throw new Error('Please enter email address');
    }
    if (!phone) {
      throw new Error('Please enter 10 digit phone number');
    }
    if (starch === null) {
      throw new Error('No starch option has been chosen');
    }
    if (cartItems.length === 0) {
      throw new Error('There are no items added to order');
    }
    if (!scheduled) {
      throw new Error('Please schedule pickup and return times');
    }
    if (!scheduled.room) {
      throw new Error('Please enter room number');
    }
    if (!scheduled.hotel) {
      throw new Error('Please enter hotel');
    }
    if (!scheduled.pickupDate) {
      throw new Error('No pickup date has been chosen');
    }
    if (!scheduled.returnDate) {
      throw new Error('No return date has been chosen');
    }
    if (!scheduled.pickupHour) {
      throw new Error('No pickup hour has been chosen');
    }
    if (!scheduled.returnHour) {
      throw new Error('No return hour has been chosen');
    }
    if (totalPrice < 3000) {
      throw new Error('The total price is less than $30');
    }
    if (!name) {
      throw new Error('Please enter full name');
    }
    return 'validation successful';
  } catch (e) {
    throw new Error(e.message);
  }
};

export default validation;
