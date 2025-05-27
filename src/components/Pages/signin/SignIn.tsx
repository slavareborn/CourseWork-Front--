'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { schemaSignIn } from './ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { signin } from '@/store/slices/sessionSlice';
import {
  StyledForm,
  StyledFormInput,
  StyledLink,
  StyledSignIn,
} from './styled';

type FormData = InferType<typeof schemaSignIn>;

const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formProps = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaSignIn),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);

    const res = await dispatch(signin(data));
    if (res.meta.requestStatus === 'rejected') {
      const payLoad = res.payload as string;
      if (payLoad) {
        formProps.setError('email', { type: 'server', message: payLoad });
      }
    } else if (res.meta.requestStatus === 'fulfilled') {
      router.push('/profile');
    }
  };

  return (
    <StyledSignIn>
      <Container maxWidth="md">
        <FormProvider {...formProps}>
          <StyledForm onSubmit={formProps.handleSubmit(onSubmit)}>
            <Typography variant="h4" gutterBottom>
              Вітаємо на сайті для записів до лікарів
            </Typography>

            <Box sx={{ width: '100%', mb: 2 }}>
              <StyledFormInput
                name="email"
                placeholder="Вкажіть email"
                label="Email"
                aria-label="Email"
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

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Увійти
            </Button>

            <Typography>
              Якщо у вас немає акаунту{' '}
              <StyledLink href="/signup">зареєструйтесь</StyledLink>
            </Typography>
          </StyledForm>
        </FormProvider>
      </Container>
    </StyledSignIn>
  );
};

export default SignIn;
