import MainContent from '../components/MainComponent/MainComponent';
import Header from '../components/Header/Header';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSkeleton from '../components/LoadingSkeleton/LoadingSkeleton';

const HomeContent = dynamic(() => import('../components/Home/Home'), {
  suspense: true,
});
export default function Home() {
  return (
    <MainContent>
      <Header />
      <Suspense fallback={<LoadingSkeleton />}>
        <HomeContent />
      </Suspense>
    </MainContent>
  );
}
