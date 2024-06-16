"use client"
import Layouts from '../../components/home/layout'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies';
import axios from "axios";

const handleErrors = (setError: any,result:any) => {

    const error = {
        username: "",
        password: "",
        name: "",
        email: "",
        no_hp: "",
        general: ""
    }

    if(result.username){
        error.username = result.username[0]
    }
    if(result.password){
        error.password = result.password[0]
    }
    if(result.name){
        error.name = result.name[0]
    }

    if(result.email){
        error.email = result.email[0]
    }

    if(result.no_hp){
        error.no_hp = result.no_hp[0]
    }

    if(result.success === false){
        error.general = result.message
    }

    setError(error)
}

async function handleSubmit(e: any, setError:any, router:any) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
        name: formData.get('name'),
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
        no_hp: formData.get('no_hp')
    }

    axios.post(`${process.env.NEXT_PUBLIC_URL_API}/register`, data,{ headers: { 'Content-Type': 'application/json' }})
    .then((response:any) => {
        const result = response.data
        if(result.success === true){
            setCookie(null, 'bb_mb_string', result.token, {
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: '/',
            });
            router.push('/');
        }
    }).catch((error:any) => {
        if(error.response.data){
            handleErrors(setError, error.response.data)
        }
    })

    
}
export default function Home() {
    const router = useRouter()

    const [error, setError] = useState({username: "", password: "",name:"",email:"",no_hp:"", general: ""})
    
    
  return (
    <Layouts>
    
        <div className="mt-24">
            <div className="px-8">
                <form onSubmit={(e)=>handleSubmit(e, setError, router)} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">name:</label>
                        <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">email:</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                        

                    </div>

                        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

                    <div className="mb-5">
                        <label htmlFor="no_hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">number:</label>
                        <input type="number" name="no_hp"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                        {error.no_hp && <p className="text-red-500 text-sm">{error.no_hp}</p>}                        

                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">username:</label>
                        <input type="text" name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                        {error.username && <p className="text-red-500 text-sm">{error.username}</p>}

                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">password:</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>

                        {error.password && <p className="text-red-500 text-sm mb-3">{error.password}</p>}

                    {/* <div className="mb-5">
                        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black ">password confirmation</label>
                        <input type="password" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div> */}
                    
                    {error.general && <p className="text-red-500 text-xs mt-2 mb-2">{error.general}</p>}

                    <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    
                    
                </form>

            </div>
        </div>
    </Layouts>
  );
}
