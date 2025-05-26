'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const RandomRiddleEntryControl = () => {
    const router = useRouter();
    const [id, setId] = useState<string>();
    const handleClick = () => {
        router.push(`/riddle/${id}`);
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/random-riddle')
            .then((response) => response.json())
            .then((riddle) => {
                setId(riddle.id);
            });
    }, []);

    if (!id) {
        return null;
    }

    return (
        <button onClick={handleClick} className="border border-blue-500 p-5">
            Resolve random riddle
        </button>
    );
};
