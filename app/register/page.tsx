"use client"
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import BootomBar from "../../components/home/bootomBar";
import { useState } from "react";
import { useRouter } from 'next/navigation'




export default function Home() {
    const router = useRouter()

    async function handleSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get('username')
        const password = formData.get('password')
        const email = formData.get('email')
        const no_hp = formData.get('no_hp')
        const name = formData.get('name')
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email, no_hp, name}),
        })
        const result = await response.json()
        
        console.log(result)

        if(result.success === true){
            localStorage.setItem('bb_mb_string', result.token)
            router.push('/')
        }
        
        
        
    }
  return (

    <>
        <Navbar/>
        <div className="mt-24">
            <div className="px-8">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your name</label>
                        <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                        

                    </div>

                    <div className="mb-5">
                        <label htmlFor="no_hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your number</label>
                        <input type="number" name="no_hp"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your username</label>
                        <input type="text" name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                    {/* <div className="mb-5">
                        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">Your password confirmation</label>
                        <input type="password" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div> */}

                    <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    
                    
                </form>

            </div>
        </div>
        <Footer/>
        <BootomBar/>
    </>
  );
}
