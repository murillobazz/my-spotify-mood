import Button from './components/getMoodButton';
import Image from 'next/image';
import yourmoodImage from '../public/yourmood.svg';

export default function Home() {

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-items-center p-8 gap-8">
      <p className="uppercase text-3xl tracking-[0.3em] font-bold text-center">My Spotify <span className="text-(--spotify-green)">Mood</span></p>
      <p>Get an overview of your latest mood of what you've listened on Spotify for the past weeks. Get recommendations and share with your friends.</p>
      <Image src={yourmoodImage} alt="Your mood" />
      <Button></Button>
    </div>
  );
}
