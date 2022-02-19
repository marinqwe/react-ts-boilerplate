import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationError } from 'components/Error/ValidationError'
import { loginSchema } from './loginSchema'

interface Gender {
  female: 'female'
  male: 'male'
  other: 'other'
}

interface FormInputs {
  username: string
  password: string
  gender: Gender
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<FormInputs> = (data: any) => console.log("LOGIN: ", data)

  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <label className='form-field'>
        Username
        <input type='text' {...register('username')} />
        {errors.username && <ValidationError message={errors.username.message} />}
      </label>
      <label className='form-field'>
        Password
        <input type='password' {...register('password')} />
        {errors.password && <ValidationError message={errors.password.message} />}
      </label>
      <input type='submit' />
    </form>
  )
}
