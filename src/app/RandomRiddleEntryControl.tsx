'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const RandomRiddleEntryControl = () => {
  const router = useRouter();
  const [id, setId] = useState<string>();
  const handleClick = () => {
    router.push(`/riddle/${id}`);
  }

  useEffect(() => {
    async function getRandomRiddle() {
      const response = await fetch('http://localhost:3000/api/random-riddle');
      const riddle = await response.json();

      setId(riddle.id);

    }

    getRandomRiddle();
  }, []);

  return (
    <button
      data-test={id ? 'random-riddle-control' : undefined}
      onClick={handleClick}
      className="border border-blue-500 p-5"
    >
      Resolve random riddle
    </button>
  );
};