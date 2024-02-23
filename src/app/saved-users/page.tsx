'use client';
import UsersList from '@/components/UsersList';

export default function SavedUsersPage() {
    const users = JSON.parse(localStorage.getItem('savedUsers') || '[]');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between container mt-8">
            <UsersList users={users} isSaved={true}/>
        </main>
    )
}
