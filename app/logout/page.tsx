"use client"
import { redirect } from "next/navigation";


export default function page() {

    localStorage.removeItem('bb_mb_string')

    redirect('/')

  return (
    <>
    </>
  );
}
