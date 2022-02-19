import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required().min(2).max(30),
  password: yup.string().required().min(6),
  gender: yup.string().required()
}).required();