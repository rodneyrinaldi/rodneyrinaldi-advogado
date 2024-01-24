import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Componente = () => {
  const [isMobile, setIsMobile] = useState(false) 
  const wapp = "https://api.whatsapp.com/send?phone=+5511912227040&text=Olá, preciso de orientações sobre:";
  const estilo = `h-screen w-screen bg-blue-100 flex flex-col justify-center items-center
                  ${isMobile ? 'p-6' : 'p-10 max-w-screen-md mx-auto'} shadow-lg`
  
   useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const monitorComponent = () => {
    return(
            <>
            <div className="text-center">
              <div className="pt-8 px-20">
                <Image src='/logoadv.png' alt="Imagem" width={825} height={380} /> 
              </div>
            </div>

            <div className="my-8">
              <Image src='/image2.png' alt="Imagem" width={1000} height={893} />
            </div>

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
  
  const mobileComponent = () => {  
    return(
      <>
        <div className="py-0">
          <Image src='/image3.png' alt="Imagem" width={1011} height={716} />
        </div>

        <div className="flex justify-center space-x-4 py-4 bg-white shadow-md">
          <h1 className="text-2xl text-blue-700">Rodney Rinaldi 
            <span className="pl-2 text-xs font-bold text-blue-700">ADVOGADO</span>
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <h2 className="text-white text-base px-10">Enfrentando questões legais? Você não está sozinho, como posso ajudá-lo?</h2>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
        <a href={wapp} target="_blank" rel="noreferrer">
            <button className="flex justify-center px-10 bg-transparent border border-white py-2 rounded-full">
              <h2 className="text-white pr-3 font-semibold">MANDE SUA MENSAGEM</h2>
              <Image src='/whatsapp.png' alt="Imagem" width={24} height={24} />
            </button>
          </a>
        </div>

        <div className="text-center p-6">
          <p className="text-sm text-black">© rodneyrinaldi</p>
        </div>
      </>
    )
  }

  return(
    <>{isMobile ? mobileComponent() : monitorComponent()}</>
  )
}

export default Componente
