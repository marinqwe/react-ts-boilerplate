import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required().min(2).max(30),
  password: yup.string().required().min(6),
  gender: yup.string().required()
}).required();