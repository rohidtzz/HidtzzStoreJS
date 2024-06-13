"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";
import Layouts from "../../../components/home/layout";
import { useParams } from 'next/navigation'

interface Product {
    data: {
        id: number;
        name: string;
        title: string;
        slug: string;
        description: string;
        price: string;
        thumbnail: string;
        stock: string;
        category_id: number;
        created_at: string;
        updated_at: string;
    };
    
}
  

export default function page() {
    const [data, setData] = useState<Product | null>(null)
    const params = useParams<{ slug: string}>()
    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/${params.slug}`)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setData(result)
            
          }catch(error){
            console.log(error)
          }        
        }
            
        fetchData()
    }, [])

  return (
    <>
        <Layouts>
            {/* {params)} */}
            {data ? (
                <>
                    
                    <div className="px-10">
                        <div className="relative flex md:flex-row  mt-28 bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full md:w-full flex-col">
                            <div className="relative justify-center w-full md:w-4/6 sm:w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl">
                                <Image src={data.data.thumbnail} priority={true} width={500} height={500} alt="card-image" className="w-full"/>
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

                                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: data.data.description  }}></p>

                                        

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
                </>
            ) : (
                <div className="mt-20">

                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            )}

        </Layouts>

    </>
  )
}
