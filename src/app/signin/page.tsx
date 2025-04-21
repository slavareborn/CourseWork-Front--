import { signup } from '@/store/slices/sessionSlice';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <p>
        If you don't have account, please <Link href="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default page;
