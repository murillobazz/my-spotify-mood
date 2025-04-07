import ResultList from "./resultList"

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
    <p className="uppercase text-3xl tracking-[0.3em] font-bold text-center">My Spotify <span className="text-(--spotify-green)">Mood</span></p>
      <ResultList></ResultList>
    </div>
  )
}