"use client"
import Navbar from '../../components/home/navbar'
import BootomBar from '../../components/home/bootomBar'

export default function page() {

  return (
    <>
        <Navbar/>
        <div className="px-8 mb-24">

            <div className="container mx-auto mt-24">
                <div className="flex flex-col md:flex-row shadow-md my-10">
                    <div className="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Product Detail</h1>
                            <h2 className="font-semibold text-2xl">1 Items</h2>
                        </div>

                        <div className="hidden md:flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 text-center">Quantity</h3>
                            
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 text-center">Total</h3>
                        </div>

                            <div >

                                <div className="flex flex-col sm:flex-row items-center -mx-8 px-6 py-5">

                                    <div className="relative flex flex-col sm:flex-row w-full sm:w-2/5">

                                        <div className="w-full flex flex-col ">
                                            {/* <img className="h-25 w-full"  alt=""> */}

                                        </div>
                                        <div className="flex flex-col  ml-4 justify-start">
                                            <span className="font-bold  text-md">asdsa</span>

                                            <span className="mt-8  text-md">uhbgasf</span>

                                            

                                            <span className="mt-8  text-xs">Rp. 421</span>

                                        </div>

                                    </div>

                                    <div className="flex justify-center w-2/5 mt-4 sm:mt-0">
                                        <div className="relative">
                                            {/* <input type="number" value="1" className="w-8 h-8 pr-8 pl-4 rounded z-0 focus:ring-2 focus:ring-indigo-600 focus:outline-none" /> */}
                                        </div>

                                    </div>

                                    
                                    <span className="text-center w-full sm:w-2/5 mt-6 sm:mt-0 font-bold text-md">Rp. 44123</span>

                                </div>
                            </div>
                        


                        <a  className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-10  sm:right-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm ">

                                        asd

                                </span>
                                <span className="font-semibold text-sm">Rp. 123</span>
                            </div>

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>
                                    Rp. 321
                                </span>
                            </div>

                            <a >
                                <button
                                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </a>
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <BootomBar/>
    </>
  )
}
