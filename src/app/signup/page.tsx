import SignUp from '@/components/Pages/signup/SignUp';
import Link from 'next/link';
//import SignUp from '@/components/Pages/signup/SignUp';
import React from 'react';

const page = () => {
  return (
    <main>
      <SignUp />
      <p>
        Якщо у вас вже є акаунт <Link href="/signin">увійдіть</Link>
      </p>
    </main>
  );
};

export default page;
