import * as yup from 'yup';

export const schemaSignIn = yup.object().shape({
  email: yup
    .string()
    .required("Email обов'язковий")
    .email('Некоректний формат email'),

  password: yup
    .string()
    .required("Пароль обов'язковий")
    .min(6, 'Пароль має містити принаймні 6 символів')
    .max(100, 'Пароль може бути не більше 100 символів')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      'Пароль має містити хоча б одну велику літеру та одну цифру',
    ),
});
