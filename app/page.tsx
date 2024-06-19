"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import Layouts from "../components/home/layout";

import Description from "../components/home/Description";
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay,Scrollbar } from 'swiper/modules';

const fetchData = async (setData:any) => {
  axios.get(`${process.env.NEXT_PUBLIC_URL_API}/product`)
  .then((response) => {
    setData(response.data.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

export default function Home() {
  
  const [data, setData] = useState<any[] | null>(null)
  
  useEffect(() => {
    fetchData(setData)  
  }, [])
  
  return (
    <Layouts>
      <div className=" bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('/banner/banner-depan.png')" }}>

        <div className=" h-full flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl md:text-6xl xl:text-6xl  font-extrabold text-black mb-6">Welcome to Our Website</h1>
          <p className="text-xl md:text-2xl xl:text-2xl text-black-200 mb-8 max-w-2xl">We are delighted to have you here. Explore our content and discover what we have to offer. Your journey to excellence starts here.</p>
          <a href="/get-it" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get it!
          </a>
        </div>
        
      </div>

      <div className="mt-10 flex justify-center items-center">
        <div className="w-full max-w-screen-lg">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {data ? (
              <div className="flex justify-center">
                {data.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="flex justify-center">
                      <Image src={"/banner/banner.png"} width={500} height={500} className="w-full h-full" alt="logo" />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center" role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center mt-24 item-center">

        <h1 className="text-3xl md:text-5xl xl:text-5xl italic font-bold">Category Product</h1>

      </div>
      
      <div className="mt-10 flex justify-center items-center">
        <div className="w-full max-w-xs md:max-w-4xl p-4 border-2 border-gray-300 rounded-xl bg-white">
          <Swiper
          
            slidesPerView={2}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            
            {data ? (
              <>
                {data.map((product) => (
                  <SwiperSlide >
                  <span className=" hover:text-opacity-60 text-black text-xl font-medium dark:bg-gray-700 dark:text-gray-300">
                    Baju Pendek
                  </span>
                </SwiperSlide>
                ))}
              </>
            ) : (
              <></>
            )}
            <SwiperSlide >
                  <button className=" hover:text-opacity-60 text-black text-xl font-medium dark:bg-gray-700 dark:text-gray-300">
                    Baju Pendek
                  </button>
            </SwiperSlide>
            <div style={{ marginBottom: "20px" }}></div>
            
            
            
          </Swiper>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 p-9 md:p-4 gap-10 md:gap-4">
          {data ? (
            <>
            
            {data.map((product:any) => (
            
            <div className="p-0 md:p-4 sm:p-2" key={ product.id }>
              <div className="max-w max-w-sm rounded overflow-hidden shadow-xl md:mt-0 " >

                <Link href={'/product/'+product.slug}>
                  <Image src={product.thumbnail} width={500} height={500} className="w-full" alt="logo" />
                </Link>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <Description text={product.description} />
                </div>

                <div className="px-6 pt-4 pb-2">
                  <Link href="/category">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Baju</span>
                  </Link>
                </div>
                      
              </div>

            </div>
            )) }
            </>
          
          ) : (
            
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>

          )}
        </div>
      </div>
    </Layouts>
  );
}
