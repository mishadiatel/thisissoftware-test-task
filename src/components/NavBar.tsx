'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NavBar() {
    const pathname = usePathname();

    return (
        <header>
            <div className={'container h-12'}>
                <div className={'flex gap-4 h-full items-center font-semibold text-xl'}>
                    <Link href={'/'} className={`${pathname === '/' ? 'underline' : ''}`}>Home</Link>
                    <Link href={'/saved-users'} className={`${pathname === '/saved-users' ? 'underline' : ''}`}>Saved Users</Link>
                </div>
            </div>
        </header>
    )
}
