'use client';

import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { schemaSignUp } from './ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/components/Input/Input';
import PhoneInput from '@/components/Input/PhoneInput';
import { InferType } from 'yup';
import FormCheckbox from '@/components/Checkbox/Checkbox';
import SelectInput from '@/components/Select/Select';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { signup } from '@/store/slices/sessionSlice';
import {
  StyledFormInput,
  StyledLink,
  StyledSignUp,
  StyledForm,
} from './styled';

type FormData = InferType<typeof schemaSignUp>;

const SignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formProps = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
      sex: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      city: '',
      agreedToTerms: false,
    },
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmit = async (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log('Form submitted:', data);
    const temp = {
      ...data,
      location: data.city,
      phone: '+' + data.phone.replace(/\D/g, ''),
    };
    const { confirmPassword: _, ...sanitazedData } = temp;
    const res = await dispatch(signup(sanitazedData));
    if (res.meta.requestStatus === 'rejected') {
      const payLoad = res.payload as string;
      if (payLoad) {
        if (payLoad.toLowerCase().includes('email')) {
          formProps.setError('email', { type: 'server', message: payLoad });
        } else if (payLoad.toLowerCase().includes('phone')) {
          formProps.setError('phone', { type: 'server', message: payLoad });
        } else {
          // Якщо не можемо визначити конкретне поле, показуємо помилку на email
          formProps.setError('email', { type: 'server', message: payLoad });
        }
      }
    } else if (res.meta.requestStatus === 'fulfilled') {
      router.push('/profile');
    }
  };

  return (
    <StyledSignUp>
      <FormProvider {...formProps}>
        <StyledForm onSubmit={formProps.handleSubmit(onSubmit)}>
          <Typography variant="h4">
            Вітаємо на сайті для записів до лікарів
          </Typography>

          <Box sx={{ width: '100%', mb: 2 }}>
            <FormInput
              name="firstName"
              placeholder="Вкажіть ім'я"
              label="Ім'я"
              aria-label="Ім'я"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <FormInput
              name="lastName"
              placeholder="Вкажіть прізвище"
              label="Прізвище"
              aria-label="Прізвище"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <FormInput
              name="age"
              placeholder="Вкажіть вік"
              label="Вік"
              aria-label="Вік"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <FormInput
              name="sex"
              placeholder="Вкажіть стать"
              label="Стать"
              aria-label="Стать"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <SelectInput
              name="city"
              placeholder="Вкажіть місто"
              options={[{ label: 'Київ', value: 'Київ' }]}
              label="Місто"
              aria-label="Місто"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <StyledFormInput
              name="email"
              placeholder="Вкажіть email"
              label="Email"
              aria-label="Email"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <PhoneInput
              name="phone"
              placeholder="+380(XX)XXXXXXX"
              label="Номер телефону"
              aria-label="Номер телефону"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <StyledFormInput
              type="password"
              name="password"
              placeholder="Введіть пароль"
              label="Пароль"
              aria-label="Пароль"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <StyledFormInput
              type="password"
              name="confirmPassword"
              placeholder="Підтвердіть пароль"
              label="Підтвердження пароля"
              aria-label="Підтвердження пароля"
            />
          </Box>

          <Box sx={{ width: '100%', mb: 2 }}>
            <FormCheckbox
              name="agreedToTerms"
              // type="checkbox"
              label="Погоджуюсь з умовами"
              aria-label="Погоджуюсь з умовами"
            />
          </Box>

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Зареєструватись
          </Button>
          <Typography>
            Вже маєте акаунт?
            <StyledLink href="/signin">Увійдіть</StyledLink>
          </Typography>
        </StyledForm>
      </FormProvider>
    </StyledSignUp>
  );
};

export default SignUp;
