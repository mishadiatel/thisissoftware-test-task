import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import {Toaster} from 'react-hot-toast';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'This Is Software Test Task',
    description: 'It is a test task for a software company on the position of a front-end developer',
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Toaster/>
            <NavBar/>
            {children}
        </body>
        </html>
    );
}
