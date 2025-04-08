import ResultContainer from "./resultContainer";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-content-center p-8 sm:p-16 font-[family-name:var(--font-geist-sans)]">
    <p className="uppercase text-3xl tracking-[0.3em] font-bold text-center">My Spotify <span className="text-(--spotify-green)">Mood</span></p>
      <ResultContainer></ResultContainer>
    </div>
  )
}