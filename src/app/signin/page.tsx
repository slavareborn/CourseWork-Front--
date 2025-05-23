import SignIn from '@/components/Pages/signin/SignIn';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      <SignIn />
      <p>
        Якщо у вас немає акаунту <Link href="/signup">зареєструйтесь</Link>
      </p>
    </main>
  );
};

export default page;
