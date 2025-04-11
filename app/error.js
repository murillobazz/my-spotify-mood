'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react';
import Link from 'next/link';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error]);
 
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-16">
      <h2>Something went wrong!</h2>
      <Link
        className="rounded-full bg-(--spotify-green) py-2 px-4 cursor-pointer hover:scale-[1.05] transition duration-300 ease-in"
        href="/"
      >
        Try again
      </Link>
    </div>
  )
}