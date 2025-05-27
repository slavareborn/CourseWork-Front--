'use client';
import { useAppDispatch } from '../../store/hooks';
import { Button, Divider, Typography, Box } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';
import { StyledTypography } from './styled';
import { confirmEmail } from '../../store/slices/sessionSlice';
import { decodeToken } from '@/utils/decodeToken';

const EmailConfirmationContent = () => {
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const response = await dispatch(confirmEmail(token as string));
    if (response.payload.isEmailConfirmed) {
      router.push('/');
    }
  };

  useEffect(() => {
    if (token) {
      const userInfo = decodeToken(token);
      setUser(userInfo);
    }
  }, [token]);

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Вітаємо, {user?.firstName} {user?.lastName}!
      </Typography>
      <Typography variant="body2" gutterBottom>
        Ми дуже раді, що ви долучилися до нас. Будь ласка, для завершення
        регістрації підтвердіть свою пошту. Для цього просто натисніть на
        посилання нижче:
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Підтвердити пошту
      </Button>
      <Divider />
      <StyledTypography variant="caption">
        Якщо кнопка “Підтвердити пошту” не працює, то спробуйте скопіювати і
        вставити URL у свій браузер. Якщо ви все ще маєте проблеми з
        підтвердженням пошти, то{' '}
        <a href="slavaotrishkokpistudy@gmail.com">напишіть нам</a>.
      </StyledTypography>
    </Box>
  );
};

const EmailConfirmation = () => {
  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <EmailConfirmationContent />
    </Suspense>
  );
};

export default EmailConfirmation;
