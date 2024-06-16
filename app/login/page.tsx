"use client"
import Link from "next/link";
import Layouts from '../../components/home/layout'
import { useState} from "react";
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies';

import axios from "axios";

const handleErrors = (setError: any,result:any) => {
    
    const error = {
        username: "",
        password: "",
        general: ""
    }

    if (result.username) {
        error.username = result.username[0]
    }
    if (result.password) {
        error.password = result.password[0]
    }


    if (result.success === false) {
        error.general = result.message
    }

    setError(error)

    return true
}

async function handleSubmit(e: any, setIsDisabled:any , setError: any,router: any) {
    e.preventDefault()
    setIsDisabled(true)
    const formData = new FormData(e.target)
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    axios.post(`${process.env.NEXT_PUBLIC_URL_API}/login`, data, {
        headers: { 'Content-Type': 'application/json' }
    }).then((response)=>{

        const result = response.data;

        if (result.success === true) {
            setCookie(null, 'bb_mb_string', result.token, {
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: '/',
            });
            router.push('/');
        }

    }).catch((error:any)=>{
        
        handleErrors(setError, error.response.data)
    }).finally(()=>{
        setIsDisabled(false)
    })

    
}


async function handleValidation(e: any, setValidation: any,setIsDisabled: any) {
    if(e.target.value.length <= 4){
       setValidation(
        {username: "username must be at least 5 characters",
            disable: true, 
            style : {border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666" ,cursor: "not-allowed"}
    })
       
    } else {
        setValidation({username: ""})
    }
    
}



export default function Home() {

    const router = useRouter()

    const [isDisabled, setIsDisabled] = useState(false)
    const [error, setError] = useState({ username: "", password: "", general: "" })
    const [validation, setValidation] = useState({ username: false, disable : false, style: {}})

   
  return (
    <Layouts>

        <div className="mt-24">
            <div className="px-8">
                <form  onSubmit={(e) => handleSubmit(e, setIsDisabled, setError,router)}className="max-w-sm mx-auto">
                    <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black">Your username</label>
                            <input onChange={(e) => handleValidation(e,setValidation,setIsDisabled)} type="text" id="username" name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            {validation.username && <p className="text-red-500 text-xs mt-1">{validation.username}</p>}
                            {error.username && <p className="text-red-500 text-xs mt-1">{error.username}</p>}
                    </div>
                    <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black md:dark:text-black">Your password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
                    </div>

                    {error.general && <p className="text-red-500 text-xs mt-2 mb-2">{error.general}</p>}
                    
                    {isDisabled ? 
                        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
                            <div className="flex justify-center items-center mt-[50vh]">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            
                            </div>
                      </div>
                    : ""
                    }

                    {validation.disable ?
                        <button disabled={validation.disable} style={validation.style} type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit</button>
                    :
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit</button>

                    }
                    
                    
                    
                    <p className="flex font-semibold  text-sm mt-10">
                        no account yet?
                        <Link href={'/register'} className="text-blue-500 pl-1">Register here</Link>
                    </p>
                    
                </form>

            </div>
        </div>
    </Layouts>
    
  );

  
}
