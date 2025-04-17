'use client'

import { requestSpotifyAuth } from "../lib/helpers";

export default function Button() {
  const handleClick = async () => {
    try {
      await requestSpotifyAuth();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button
      className="rounded-full bg-(--spotify-green) py-2 px-4 cursor-pointer hover:scale-[1.05] transition duration-300 ease-in"
      onClick={handleClick}
    >
      <p className="text-xl text-bold">Get my mood</p>
    </button>
  )
}