'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { schemaCity } from './ValidationSchema';
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
import { fetchCity } from '@/store/slices/citySlice';

type FormData = InferType<typeof schemaCity>;

const ProfileComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formProps = useForm({
    defaultValues: {
      city: '',
    },
    resolver: yupResolver(schemaCity),
  });

  const onSubmit = async (data: FormData) => {
    console.log('City submitted:', data);

    const res = await dispatch(fetchCity(data.city));
    if (res.meta.requestStatus === 'rejected') {
      const payLoad = res.payload as string;
      if (payLoad) {
        formProps.setError('city', { type: 'server', message: payLoad });
      }
    }
  };

  return (
    <StyledSignIn>
      <Container maxWidth="md">
        <FormProvider {...formProps}>
          <StyledForm onSubmit={formProps.handleSubmit(onSubmit)}>
            <Typography variant="h4" gutterBottom>
              Пошук міста
            </Typography>

            <Box sx={{ width: '100%', mb: 2 }}>
              <StyledFormInput
                name="city"
                placeholder="Вкажіть місто"
                label="Місто"
                aria-label="Місто"
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Пошук міста
            </Button>

          </StyledForm>
        </FormProvider>
      </Container>
    </StyledSignIn>
  );
};

export default ProfileComponent;
