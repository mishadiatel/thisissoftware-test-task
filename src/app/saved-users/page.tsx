'use client';
import UsersList from '@/components/UsersList';
import {useEffect, useState} from 'react';

export default function SavedUsersPage() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if(typeof window !== 'undefined') {
            const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]');
            setUsers(savedUsers);
        }
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between container mt-8">
            <UsersList users={users} isSaved={true}/>
        </main>
    )
}
