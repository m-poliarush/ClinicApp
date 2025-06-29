import axios from 'axios';
import type { LoginRequestProps, LoginResponse } from '../TypeModel/Types';
import {useAuth} from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { LoginRequest } from '../Api/LoginRequest';
import { Form, Button} from 'react-bootstrap';
import { useState } from 'react';


const Registration = () => {
    const { registration } = useAuth();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<LoginRequestProps>();
   const [errorMessage, setErrorMessage] = useState<string | null>(null);
   
    const onSubmit = async (data: LoginRequestProps) => {
        try {
          setErrorMessage(null); 
           await registration(data);
          navigate("/")
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Неправильний логін або пароль. Будь ласка, спробуйте ще раз.');
        } 
    };
    return (
      <>
           <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
    <header className="mb-5">
      <img
        src="/clinic-logo.png"
        alt="Clinic Logo"
        className="d-block mx-auto"
        style={{ maxHeight: '100px' }}
      />
    </header>

    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded bg-white"
      style={{ width: '100%', maxWidth: '400px' }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ваш Е-меіл</Form.Label>
        <Form.Control type="email" placeholder="Ваш Е-меіл" {...register("email")} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ваш Пароль</Form.Label>
        <Form.Control type="password" placeholder="Ваш пароль" {...register("password")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Button
          variant="link"
          onClick={() => navigate("/login")}
          className="p-0 text-decoration-none text-black"
        >
          Авторизуватися
        </Button>
      </Form.Group>
    {errorMessage && (
    <div className="alert alert-danger" role="alert">
    {errorMessage}
    </div>)}
      <Button variant="primary" type="submit" className='w-100 bg-secondary border-0'> 
        Зареєструватися
      </Button>
    </Form>
  </div>
  </>
  )
}

export default Registration;