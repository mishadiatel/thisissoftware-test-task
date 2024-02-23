'use client';

import {useParams, useSearchParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import UsersList from '@/components/UsersList';
import {useRouter} from 'next/navigation';

export default function Home() {
    const [users, setUsers] = useState([]);
    const router = useRouter();
    const quantity = useSearchParams().get('quantity') || '20';


    useEffect(() => {
        (async () => {
            const response = await fetch(`https://randomuser.me/api/?results=${quantity}`);
            const data = await response.json();
            console.log(data.results);
            setUsers(data.results);
            console.log(users.length);
        })();
    }, [quantity]);

    const getMoreUsersHandler = () => {
        router.push(`/?quantity=${parseInt(quantity) + 20}`);
    };


    return (
        <main className="flex min-h-screen flex-col items-center justify-between container mt-8">
            <UsersList users={users}/>
            <button onClick={getMoreUsersHandler} className={'my-8 px-4 py-2 button'}>Get more users</button>
        </main>
    );
}
