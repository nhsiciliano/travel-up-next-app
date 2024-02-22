"use client"
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import { useState, useEffect } from 'react'


export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPLaceList('Hotels in Buenos Aires');
  }, [])

  const getPLaceList = async (value) => {
    setPlaceList([]);
    const result = await fetch("/api/google-place-api?q="+value);
    const data = await result.json();
    setPlaceList(data.res.results);
  }
  return (
    <div>
      <Hero userInput={(value) => getPLaceList(value)}/>
      {placeList? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
