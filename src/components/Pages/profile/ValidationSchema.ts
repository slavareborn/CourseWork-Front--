import * as yup from 'yup';

export const schemaCity = yup.object().shape({
  city: yup
    .string()
    .required("Місто обов'язкове")
});
