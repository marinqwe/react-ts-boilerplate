import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationError } from 'components/Error/ValidationError'
import { registerSchema } from './registerSchema'

interface Gender {
  female: 'female'
  male: 'male'
  other: 'other'
}

interface FormInputs {
  email: string
  username: string
  password: string
  gender: Gender
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<FormInputs> = (data: any) => console.log(data)

  return (
    <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      <label className='form-field'>
        Email
        <input type='text' {...register('email')} />
        {errors.email && <ValidationError message={errors.email.message} />}
      </label>
      <label className='form-field'>
        Username
        <input type='text' {...register('username')} />
        {errors.username && (
          <ValidationError message={errors.username.message} />
        )}
      </label>
      <label className='form-field'>
        Password
        <input type='password' {...register('password')} />
        {errors.password && (
          <ValidationError message={errors.password.message} />
        )}
      </label>
      <label className='form-field'>
        Gender
        <select {...register('gender')}>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
        </select>
      </label>
      <input type='submit' />
    </form>
  )
}
