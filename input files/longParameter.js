// Function with a long parameter list
function createUserProfile(firstName, lastName, email, dateOfBirth, phoneNumber, address, city, state, postalCode, country) {
    return {
      name: firstName + ' ' + lastName,
      email: email,
      dob: dateOfBirth,
      phone: phoneNumber,
      address: {
        street: address,
        city: city,
        state: state,
        postal: postalCode,
        country: country
      }
    };
  }
  