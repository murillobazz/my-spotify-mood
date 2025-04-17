import ResultContainer from "./resultContainer";
// import { Suspense } from 'react';
// import Loading from "./loading";

export default async function Page() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-items-center p-8 gap-8">
    <p className="uppercase text-3xl tracking-[0.3em] font-bold text-center">My Spotify <span className="text-(--spotify-green)">Mood</span></p>
      <ResultContainer></ResultContainer>
    </div>
  )
}