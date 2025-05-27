import MainContent from '../components/MainComponent/MainComponent';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSkeleton from '../components/LoadingSkeleton/LoadingSkeleton';

const HomeContent = dynamic(() => import('../components/Home/Home'), {
  suspense: true,
});
export default function Home() {
  return (
    <MainContent>
      <Suspense fallback={<LoadingSkeleton />}>
        <HomeContent />
      </Suspense>
    </MainContent>
  );
}
