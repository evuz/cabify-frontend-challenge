import requiredValidator from './required';
import emailValidator from './email';
import phoneNumberValidator from './phoneNumber';

export const required = requiredValidator;
export const email = emailValidator;
export const phoneNumber = phoneNumberValidator;
export default { required, email, phoneNumber };
