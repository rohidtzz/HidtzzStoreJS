// "use server";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'
import Head from 'next/head';

export default function NotFound() {

    redirect('/');
    // const router = useRouter();

    // useEffect(() => {
    //     // Pastikan useEffect hanya dijalankan di sisi klien
    //     if (typeof window !== 'undefined') {
    //         const redirectTimer = setTimeout(() => {
    //             router.push('/');
    //         }, 3000);

    //         return () => clearTimeout(redirectTimer);
    //     }
    // }, [router]);

    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>Oops! Looks like the page you're looking for does not exist.</p>
            </div>
        </>
    );
}
