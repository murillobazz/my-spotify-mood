'use client';

import { getToken, getRecentTopArtists, getUserProfile } from "../lib/helpers";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ResultCard from "./resultCard";

export default function   ResultContainer() {
  const params = useSearchParams();
  const [artists, setArtists] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const code = params.get('code');

    if (code) {
      async function fetchData() {
        // Token is set in localStorage as 'access_token'
        await getToken(code);
        let {items} = await getRecentTopArtists();
        setArtists(items);

        let user = await getUserProfile();
        setUser(user);
      }

      fetchData();
    }
  }, []) // useEffect is called when user gets back from authentication

  useEffect(() => {
  }, [artists]);


  return (
    <>
      <ResultCard user={user}></ResultCard>
      <p>you are on a
      {artists && artists.map((item) => {
        // if (item.genres.length > 0) return;
        return (
          <span key={item.id}> {item.genres[0]} </span>
        )
      })}
      mood
      </p>
    </>
  );
}
