import * as yup from 'yup';
import { InferType } from 'yup';

export const schemaSignUp = yup.object().shape({
  firstName: yup
    .string()
    .required("Ім'я обов'язкове")
    .matches(/^[А-Яа-яЇїІіЄєҐґ\s-]+$/, 'Тільки кирилиця, пробіли і дефіси')
    .min(2, "Ім'я має містити принаймні два символи")
    .max(45, "Ім'я може бути не більше 45 символів"),

  lastName: yup
    .string()
    .required("Прізвище обов'язкове")
    .matches(/^[А-Яа-яЇїІіЄєҐґ\s-]+$/, 'Тільки кирилиця, пробіли і дефіси')
    .min(2, 'Прізвище має містити принаймні два символи')
    .max(45, 'Прізвище може бути не більше 45 символів'),

  age: yup
    .number()
    .typeError('Вік має бути числом')
    .required("Вік обов'язковий")
    .min(1, 'Вік має бути більше 0')
    .max(120, 'Вік не може перевищувати 120'),

  sex: yup
    .string()
    .required("Стать обов'язкова")
    .oneOf(
      ['чоловіча', 'жіноча'],
      'Стать повинна бути "чоловіча" або "жіноча"',
    ),

  email: yup
    .string()
    .required("Email обов'язковий")
    .email('Некоректний формат email'),

  phone: yup
    .string()
    .required("Телефон обов'язковий")
    .transform((value) => value.replace(/[^+\d]/g, '')) // залишає + та цифри
    .matches(/^\+380\d{9}$/, 'Телефон має бути у форматі +380XXXXXXXXX'),

  password: yup
    .string()
    .required("Пароль обов'язковий")
    .min(6, 'Пароль має містити принаймні 6 символів')
    .max(100, 'Пароль може бути не більше 100 символів')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      'Пароль має містити хоча б одну велику літеру та одну цифру',
    ),

  confirmPassword: yup
    .string()
    .required("Підтвердження пароля обов'язкове")
    .oneOf([yup.ref('password')], 'Паролі не співпадають'),

  city: yup
    .string()
    .required("Місто обов'язкове")
    .min(2, 'Місто має містити принаймні 2 символи'),

  agreedToTerms: yup.boolean().oneOf([true], 'Потрібно погодитись з умовами'),
});
