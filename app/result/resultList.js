'use client';

import { getToken, getRecentTopArtists } from "../lib/helpers";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

export default function ResultList() {
  const params = useSearchParams();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const code = params.get('code');

    if (code) {
      async function fetchData() {
        // Token is set in localStorage as 'access_token'
        await getToken(code);
        let {items} = await getRecentTopArtists();
        setArtists(items);
      }

      fetchData();
      console.log(artists);
    }
  }, []) // useEffect is called when user gets back from authentication

  useEffect(() => {
    console.log("Artists updated:", artists);
  }, [artists]);


  return (
    <>
      {artists && artists.map((item) => {
        return (
          <li key={item.id}>{item.name}</li>
        )
      })}
    </>
  );
}
