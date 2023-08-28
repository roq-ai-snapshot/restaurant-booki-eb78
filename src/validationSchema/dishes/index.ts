import * as yup from 'yup';

export const dishValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  ingredients: yup.string().required(),
  preparation_time: yup.number().integer().required(),
  menu_id: yup.string().nullable().required(),
});
