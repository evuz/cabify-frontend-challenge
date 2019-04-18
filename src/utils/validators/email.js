function emailValidator(value) {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!isEmail) {
    return { key: 'email', message: 'Incorrect e-mail' };
  }
  return null;
}

export default emailValidator;
