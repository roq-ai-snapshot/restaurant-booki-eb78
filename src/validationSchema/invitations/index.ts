import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  role: yup.string().required(),
  status: yup.string().required(),
  sent_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
