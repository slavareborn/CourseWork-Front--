'use client';

import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { schemaSignIn } from './ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/components/Input/Input';
import { InferType } from 'yup';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { signin } from '@/store/slices/sessionSlice';

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
    <section>
      <FormProvider {...formProps}>
        <form onSubmit={formProps.handleSubmit(onSubmit)}>
          <Typography>Вітаємо на сайті для записів до лікарів</Typography>

          <Box>
            <FormInput
              name="email"
              placeholder="Вкажіть email"
              label="Email"
              aria-label="Email"
            />
          </Box>

          <Box>
            <FormInput
              type="password"
              name="password"
              placeholder="Введіть пароль"
              label="Пароль"
              aria-label="Пароль"
            />
          </Box>

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Увійти
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};

export default SignIn;
