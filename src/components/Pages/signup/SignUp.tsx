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
    const sanitazedData = {...data, location: data.city, phone: data.phone.replace(/\D/g, "")}
    const res = await dispatch(signup(sanitazedData))
    if (res.meta.requestStatus === "rejected") {
      const payLoad = res.payload as string;
      if (payLoad) {
        formProps.setError("email", {type: "server", message: payLoad})
      }
    }
    else if (res.meta.requestStatus === "fulfilled") {
      router.push("/profile")
    }
  };

  return (
    <section>
      <FormProvider {...formProps}>
        <form onSubmit={formProps.handleSubmit(onSubmit)}>
          <Typography>Вітаємо на сайті для записів до лікарів</Typography>

          <Box>
            <FormInput
              name="firstName"
              placeholder="Вкажіть ім'я"
              label="Ім'я"
              aria-label="Ім'я"
            />
          </Box>

          <Box>
            <FormInput
              name="lastName"
              placeholder="Вкажіть прізвище"
              label="Прізвище"
              aria-label="Прізвище"
            />
          </Box>

          <Box>
            <FormInput
              name="age"
              placeholder="Вкажіть вік"
              label="Вік"
              aria-label="Вік"
            />
          </Box>

          <Box>
            <FormInput
              name="sex"
              placeholder="Вкажіть стать"
              label="Стать"
              aria-label="Стать"
            />
          </Box>

          <Box>
            <SelectInput
              name="city"
              placeholder="Вкажіть місто"
              options={[{ label: 'Київ', value: 'Київ' }]}
              label="Місто"
              aria-label="Місто"
            />
          </Box>

          <Box>
            <FormInput
              name="email"
              placeholder="Вкажіть email"
              label="Email"
              aria-label="Email"
            />
          </Box>

          <Box>
            <PhoneInput
              name="phone"
              placeholder="+380(XX)XXXXXXX"
              label="Номер телефону"
              aria-label="Номер телефону"
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

          <Box>
            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Підтвердіть пароль"
              label="Підтвердження пароля"
              aria-label="Підтвердження пароля"
            />
          </Box>

          <Box>
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
        </form>
      </FormProvider>
    </section>
  );
};

export default SignUp;
