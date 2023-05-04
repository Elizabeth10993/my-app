import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data);
  }

  console.log(watch("example")); 

  return (
  <div> 
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Заполните заявку на обратную связь</h1>
    <div className='input-group mb-3'>
      <input
      {...register('lastName',{
        required: true,
        maxLength:50,
        pattern: /^[А-Яа-я]+$/i
      })}
      type="text"
      className='form-control'
      placeholder='Фамилия'/>
    </div>  
    {errors?.lastName?.type === 'required'&& (
      <p>Поле обязательно для заполнения</p>
    )}
     {errors?.lastName?.type === 'pattern'&&(
      <p>Поле заполнено некорректно</p>
    )}
    {errors?.lastName?.type === 'maxLenght'&&(
      <p>Поле не может превышать 50 символов</p>
    )}
    <div className='input-group mb-3'>
      <input
      {...register('firstName',{
        required: true,
        maxLength:50,
        pattern: /^[А-Яа-я]+$/i
      })}
      type="text"
      className='form-control'
      placeholder='Имя'/>
    </div> 
    {errors?.firstName?.type === 'required'&& (
      <p>Поле обязательно для заполнения</p>
    )}
    {errors?.firstName?.type === 'pattern'&&(
      <p>Поле заполнено некорректно</p>
    )}
    {errors?.firstName?.type === 'maxLenght'&&(
      <p>Поле не может превышать 50 символов</p>
    )}
    <div className='input-group mb-3'>
      <input
      {...register('patronymic',{
        required: true,
        maxLength:50,
        pattern: /^[А-Яа-я]+$/i
      })}
      type="text"
      className='form-control'
      placeholder='Отчество'/>
    </div> 
    {errors?.patronymic?.type === 'required'&& (
      <p>Поле обязательно для заполнения</p>
    )}
    {errors?.patronymic?.type === 'pattern'&&(
      <p>Поле заполнено некорректно</p>
    )}
    {errors?.patronymic?.type === 'maxLenght'&&(
      <p>Поле не может превышать 50 символов</p>
    )}
    <div className='input-group mb-3'>
      <input
      {...register('email',{
        required: true,
        maxLength:50,
      })}
      type="email"
      className='form-control'
      placeholder='Email'/>
    </div> 
    {errors?.email?.type === 'required'&& (
      <p>Поле обязательно для заполнения</p>
    )}
    {errors?.email?.type === 'maxLenght'&&(
      <p>Поле не может превышать 50 символов</p>
    )}
      <input className='btn btn-outline-primary' type="submit"/>
    </form>
  </div>   
  );
}

export default Form