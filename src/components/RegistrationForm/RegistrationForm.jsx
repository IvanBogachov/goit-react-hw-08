import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '/src/redux/auth/operations.js';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' component='div' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' component='div' />

          <label htmlFor='password'>Password</label>
          <Field name='password' type='password' />
          <ErrorMessage name='password' component='div' />

          <button type='submit' disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
