import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Componente = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

   useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const estilo = `h-screen w-screen bg-blue-100 flex flex-col justify-center items-center
                  ${isMobile ? 'p-6' : 'p-10 max-w-screen-md mx-auto'} shadow-lg`

  return (
    <>
      <div className="text-center">
        <div className="pt-8 px-20">
          {isMobile ? 
            <Image src='/logoadv.png' alt="Imagem" width={206} height={57} />
          : 
            <Image src='/logoadv.png' alt="Imagem" width={825} height={380} />
          }
          
          
          {/* <Image src='/title.png' alt="Imagem" width={194} height={84} /> */}
          {/* <Image src='/title.png' alt="Imagem" width={779} height={211} /> */}
          {/* <Image src='/logo.png' alt="Imagem" width={54} height={54} /> */}
          {/* <Image src='/logo.png' alt="Imagem" width={1085} height={1081} /> */}
        </div>
      </div>

      {isMobile ? 
        <div className="my-8">
          <Image src='/image.png' alt="Imagem" width={1011} height={716} />
        </div>
       : 
        <div className="my-8">
          <Image src='/image2.png' alt="Imagem" width={1000} height={893} />
        </div>
       }

      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Opção 1</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Opção 2</button>
      </div>

      <div className="text-center">
        <p className="text-sm text-black">© Copilot 2024</p>
      </div>
    </>
  )
}

export default Componente
