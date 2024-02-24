'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {Suspense, useEffect, useState} from 'react';
import UsersList from '@/components/UsersList';
import Skeleton from '@/components/Skeleton';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const quantity = useSearchParams().get('quantity') || '20';

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError('')
                const response = await fetch(`https://randomuser.me/api/?results=${quantity}`);
                const data = await response.json();
                setUsers(data.results);

            }catch (e) {
                setError('Failed to fetch users');
            }
            setLoading(false);

        })();
    }, [quantity]);

    const getMoreUsersHandler = () => {
        router.push(`/?quantity=${parseInt(quantity) + 20}`);
    };
    return (
        <>
            {loading && (<Skeleton />)}
            {error && <p>{error}</p>}
            {users && users.length > 0 && <UsersList users={users}/> }

            <button onClick={getMoreUsersHandler} className={'my-8 px-4 py-2 button'}>Get more users</button>
        </>
    );
};

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between container mt-8">
            <Suspense fallback={<div>Loading...</div>}>
                <Main/>
            </Suspense>
        </main>
    );
}
