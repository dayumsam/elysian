"use client"

// import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  fileId: string
  thumbnail: string
  filePath: string
  height: number
  width: number
  tags: string[]
  url: string
}

interface PreferenceData{
  [key: string]: string
}

export default function Home() {

  const [loading, setLoading] = useState<boolean>(true)
  const [images, setImages] = useState<ImageData[]>()
  const [preferences, setPreferences] = useState<PreferenceData>()


  const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/images`)
    .then((res) => res.json())
    // .catch((err)=>{
    //     alert("Something went wrong");
    //     // setImgErr(true)
    // })
    .then((data) => {
        setImages(data)
        setLoading(false)
    })
  }, [BASE_URL])

  const handlleCheck = (event:React.MouseEvent<HTMLInputElement>) => {
    const e = event.target as HTMLInputElement
    if (preferences && preferences.hasOwnProperty(e.getAttribute('data-id')!)){
        const newDict = {...preferences}
        delete newDict[e.getAttribute('data-id')!]
        setPreferences(newDict)
    }

    else{
        const newSelection:PreferenceData = {}
        newSelection[e.getAttribute('data-id')!] = e.value
        const newDict = {
            ...preferences,
            ...newSelection
        }
        setPreferences(newDict);
    } 
};
  
  return (
      <div >
        <main className="max-w-6xl mx-auto">
          {loading ? 
            <>
              loading
            </>:
            <>
            <div className="">
                <p>Tell us about the styles that excite you!</p>
                <p className=""> select the styles you like</p>
            </div>

            <form className="">
                <div className="grid grid-cols-5 gap-6">
                        {images && images.map((image) => 
                            <div className="bg-center bg-no-repeat bg-cover relative cursor-pointer before:p-t-[125%] before:block" key={image.fileId} style={{backgroundImage: `url(${image.url})`}}>
                                <input type="checkbox" id={image.fileId} className="" value={image.tags?.[0] || ''}  data-id={image.fileId} onClick={(event) => handlleCheck(event)}/>
                                <label htmlFor={image.fileId} className="block absolute cursor-pointer top-0 left-0 h-full w-full z-10 select-none before:block before:text-black before:rounded-lg before:absolute before:top-4 before:right-4 before:w-6 before:h-6 before:text-center before:leading-6 before:scale-0 before:duration-[0.4ms]"/>
                            </div>
                        )}
                </div>
            </form> 
          </> 
        }
      </main>
    </div>
  );
}
