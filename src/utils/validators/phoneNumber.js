function phoneNumberValidator(value) {
  const regex = /^(?=.*\d)[\d ]+$/;
  if (!regex.test(value)) {
    return { key: 'phoneNumber', message: 'Incorrect phone number' };
  }
  return null;
}
export default phoneNumberValidator;
