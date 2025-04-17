'use client';

import { getToken, getRecentTopArtists, getUserProfile, getRecommendations } from "../lib/helpers";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ResultCard from "./resultCard";

export default function   ResultContainer() {
  const params = useSearchParams();
  const [artists, setArtists] = useState([]);
  const [images, setImages] = useState([]);
  const [user, setUser] = useState(null);
  // const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const code = params.get('code');

    if (code) {
      async function fetchData() {
        // Token is set in localStorage as 'access_token'
        await getToken(code);
        // Get and set artists informations
        let {items} = await getRecentTopArtists();
        setArtists(items);
        // Get images from the artists
        setImages(items.map((item) => item.images[0].url));
        // Get and set user profile
        let user = await getUserProfile();
        setUser(user);
        // Extract artists' Ids
        let artistsIds = items.map((item) => item.id).join(',');
        // Extract genres
        // let genres = [];
        // for (let i = 0; genres.length <= 4 ; i++) {
        //   for (let j = 0; j < limitedArtists[i].genres.length; j++) {
        //     if (genres.length === 5) break;
        //     genres.push(limitedArtists[i].genres[j].replace(/\s/g, ''));
        //   }
        // }
        // Get and set for recommendations
        // let {tracks} = await getRecommendations(artistsIds);
        // setRecommendations(tracks);
        // console.log(recommendations);
      }

      fetchData();
    }
  }, []) // useEffect is called when user gets back from authentication

  useEffect(() => {
  }, [artists]);

  let sortedGenres = artists.map((item) => item.genres.join(' ')).join(' ');

  return (
    <> 
      <div className="mb-8">
        <p>
          you are on a {sortedGenres} mood
        </p>
      </div>
      <ResultCard user={user} images={images}></ResultCard>
    </>
  );
}
