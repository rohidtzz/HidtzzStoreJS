import Image from "next/image";
import Link from "next/link";

import Layouts from "../components/home/layout";

import Description from "../components/home/Description";

import axios from "axios";

async function getData() {

  try {

    const res = await axios.get(`${process.env.URL_PUBLIC_API}/api/product`);
    if (res.status !== 200) {
      throw new Error('Network response was not ok');
    }
    // console.log(res.cata);
    const data = await res.data;
    return data.data;
    
    
  } catch (error:any) {
    
    console.log(error);
    if(error.code === 'ECONNREFUSED'){
      return { message: 'Server not available' };
    }
  }
  
}

export default async function Home() {
  const datas = await getData();
  
  return (
    <Layouts>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-4 mt-10 md:mt-20  p-9 md:p-4">
        
      {Array.isArray(datas) ? (datas.map((data: any) => (
        <div className="p-0 md:p-4 sm:p-2" key={ data.id }>
          <div className="max-w max-w-sm rounded overflow-hidden shadow-xl mt-10 md:mt-0" >

            <Link href={'/product/'+data.slug}>
              <Image src={data.thumbnail} width={500} height={500} className="w-full" alt="logo" />
            </Link>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              {/* <p className="text-gray-700 text-base text-justify" dangerouslySetInnerHTML={{ __html: data.description }}></p> */}
              <Description text={data.description} />
            </div>

            <div className="px-6 pt-4 pb-2">
              <Link href="/category">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Baju</span>
              </Link>
            </div>
                  
          </div>

        </div>
        )) ) : (

          <div className="max-w max-w-sm ">
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{datas.message}</div>
            </div>
          </div>

        )}
        
      </div>

    </Layouts>
  );
}
