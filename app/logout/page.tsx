"use client"
import { useRouter } from "next/navigation";
import { destroyCookie } from 'nookies';

export default function page() {
    const router = useRouter()
    // localStorage.removeItem('bb_mb_string')
    destroyCookie(null, 'bb_mb_string');
    router.push('/')
    // redirect('/')

  return (
    <>
    </>
  );
}
