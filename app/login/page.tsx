"use client"
import Link from "next/link";
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import BootomBar from "../../components/home/bootomBar";
import { useState } from "react";
import { useRouter } from 'next/navigation'



export default function Home() {

    // handleSubmit()
    const router = useRouter()
    
    const [errorUsenrname, setErrorUsenrname] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [ error, setError] = useState("")
    

    async function handleSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get('username')
        const password = formData.get('password')
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        const result = await response.json()
        if(result.username){
            setErrorUsenrname(result.username[0])
            setErrorPassword("")
            setError("")
        }
        if(result.password){
            
            setErrorUsenrname("")
            setErrorPassword(result.password[0])
            setError("")
        }

        if(result.success === false){
            setErrorUsenrname("")
            setErrorPassword("")
            setError(result.message)
        }

        if(result.username && result.password){
            setErrorUsenrname(result.username[0])
            setErrorPassword(result.password[0])
            setError("")
        }

        if(result.success === true){
            localStorage.setItem('bb_mb_string', result.token)
            router.push('/')
        }
        
        console.log(result)
        
    }

  return (

    <>
        <Navbar/>
        <div className="mt-24">
            <div className="px-8">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black">Your username</label>
                            <input type="text" id="username" name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            {errorUsenrname && <p className="text-red-500 text-xs mt-1">{errorUsenrname}</p>}
                    </div>
                    <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black">Your password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            {errorPassword && <p className="text-red-500 text-xs mt-1">{errorPassword}</p>}
                    </div>

                    {error && <p className="text-red-500 text-xs mt-2 mb-2">{error}</p>}

                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    
                    <p className="flex font-semibold  text-sm mt-10">
                        no account yet?
                        <Link href={'/register'} className="text-blue-500 pl-1">Register here</Link>
                    </p>
                    
                </form>

            </div>
        </div>
        <Footer/>
        <BootomBar/>
    </>
  );
}
