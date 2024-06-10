import Image from "next/image";

import axios from "axios";
import { redirect } from 'next/navigation'


async function getData(params: string) {
    
    try {

        const slug = params;
        const res = await axios.get(`${process.env.URL_PUBLIC_API}/api/product/${slug}`);
        if (res.status !== 200) {
          throw new Error('Network response was not ok');
        }

        const data = await res.data;
        return data.data;
        
        
    } catch (error:any) {
        console.log(error);
        redirect('/');
    }
      
}


export default async function page({ params }: { params: { slug: string } }) {
    const datas = await getData(params.slug);
   
  return (
    <>
        <div className="px-10">
            <div className="relative flex md:flex-row  mt-28 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full md:w-full flex-col">
                <div className="relative justify-center w-full md:w-4/6 sm:w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl">
                    <Image src={datas.thumbnail} priority={true} width={500} height={500} alt="card-image" className="w-full"/>
                </div>

                <div className="p-6">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black-500">


                    </h4>
                    <h2 className="font-semibold ">Variant: </h2>
                    <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-2 sm:gap-5">

                        <li>
                            <input type="radio" id=""  name="variant" className="hidden peer"/>
                            <div className="flex items-center justify-center w- text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <label htmlFor="">
                                    <div className="p-2 justify-center">
                                        <span className="font-semibold"></span>
                                    </div>
                                </label>

                            </div>
                        </li>

                        <br/>
                            
                        <h2 className="font-semibold ">Sub Variant:</h2>

                        <ul className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-12 gap-2 sm:gap-5">
                            <li>
                                <input type="radio" id=""  name="subvariant" value="" className="hidden peer"/>
                                <div className="flex items-center justify-center w-auto text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <label htmlFor="">
                                        <div className="p-2 justify-center">
                                            <span className="font-semibold"></span>
                                        </div>
                                    </label>

                                </div>
                            </li>
                        </ul>



                    </ul>

                    <br/>

                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                
                    </p>

                            

                    <a href="/category/{{$product[0]->product->category->slug}}">

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>

                    </a>

                    <br/><br/>

                    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Cart
                    </button>
                    
                </div>




            </div>
        </div>

        {/* </div>
            <div className="px-10 ">
                <div className="relative flex md:flex-row  mt-28 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full md:w-full flex-col">
                    <div className="relative justify-center w-full md:w-4/6 sm:w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl">
                        <img src="" alt="card-image" className="w-full"/>
                    </div>

                    <div className="p-6">

                            <h4
                                className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black-500">
                                
                            </h4>

                            <br>
                            
                            <h2 className="font-semibold ">Variant:</h2>
                            <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-2 sm:gap-5">

                                    <li>
                                        <input type="radio" id=""  name="variant"
                                            value="{{ $item->id }}" className="hidden peer">
                                        <div className="flex items-center justify-center w- text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <label for="">

                                                <div className="p-2 justify-center">
                                                    <span className="font-semibold"></span>
                                                </div>
                                            </label>

                                        </div>
                                    </li>



                            </ul>

                            <br>
                            
                            <h2 className="font-semibold ">Sub Variant:</h2>

                            <ul className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-12 gap-2 sm:gap-5">
                                        <li>
                                            <input type="radio" id=""  name="subvariant" value="" className="hidden peer">
                                            <div className="flex items-center justify-center w-auto text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <label >
                                                    <div className="p-2 justify-center">
                                                        <span className="font-semibold"></span>
                                                    </div>
                                                </label>

                                            </div>
                                        </li>
                                


                            </ul>

                            <br>

                            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                
                            </p>

                            

                            <a href="/category/{{$product[0]->product->category->slug}}">

                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>

                            </a>

                            <br><br>

                            <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add to Cart
                            </button>
                            
                    </div>
                </div>
            </div> */}
    </>
  )
}
