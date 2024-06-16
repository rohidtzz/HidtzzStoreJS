import Image from 'next/image'
import Link from 'next/link'

import images from '../../public/favicon.ico'

export default function navbar() {
return (
<>
    <nav
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="{{ config('app.url') }}" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src={images} alt="logo" width="32" height="32" />

                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


                <Link href={'/login'} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</Link>
                {/* <button type="button"
                            className="relative invisible sm:visible inline-flex items-center p-3 text-sm font-medium text-center text-white  ">
                            <svg className="h-8 w-8 text-gray-500" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="9" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                            </svg>

                            <span className="sr-only">Notifications</span>
                            <div
                                className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-500 bg-blue-200 border-2 border-white rounded-full -top-0 -end-1 dark:border-gray-900">

                                2
                                

                            </div>
                        </button> */}
                

            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/" className="block py-2 px-3  text-blue-700 md:text-blue-700 md:dark:text-blue-500 dark:text-blue-500  rounded md:bg-transparent  md:p-0 ">Home</Link>
                    </li>
                    <li>
                        <Link href="/product" className="block py-2 px-3  text-blue-700 md:text-blue-700 md:dark:text-blue-500 dark:text-blue-500  rounded md:bg-transparent  md:p-0 ">Product</Link>
                    </li>
                    <li>
                        <Link href="/transaction" className="block py-2 px-3  text-blue-700 md:text-blue-700 md:dark:text-blue-500 dark:text-blue-500  rounded md:bg-transparent  md:p-0 ">Transaction</Link>
                    </li>
                    <li>
                        <Link href="/logout" className="block py-2 px-3  text-blue-700 md:text-blue-700 md:dark:text-blue-500 dark:text-blue-500  rounded md:bg-transparent  md:p-0 ">Logout</Link>
                    </li>


                </ul>
            </div>
        </div>
    </nav>

</>
)
}
