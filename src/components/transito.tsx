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

  const handleEmailClick = () => {
    const enderecoEmail = 'advogado@rodneyrinaldi.com';
    const assuntoEmail = 'Enviado pelo site advogado.rodneyrinaldi.com';
    const corpoEmail = '...';

    const url = `mailto:${enderecoEmail}?subject=${encodeURIComponent(assuntoEmail)}&body=${encodeURIComponent(corpoEmail)}`;
    window.open(url, '_blank');
  };

  const monitorComponent = () => {
    return(
      <>
        <div className="flex justify-center space-x-4 py-8 bg-white">
          <Image src='/transito.png' alt="Imagem" width={505} height={358} />
        </div>

        <div className="flex justify-center space-x-4 pb-4 bg-white">
          <h1 className="font-nunito text-4xl text-slate-900">Advogado Rodney Rinaldi
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <div className="flex items-center p-4">
            <div className="rounded-full overflow-hidden mr-4">
              <Image src='/image4.png' alt="Imagem" width={60} height={60} className="rounded-full" />
            </div>
            <div className="bg-gray-200 p-3 rounded-lg">
              <p className="font-nunito text-xl text-gray-800 text-justify hyphenate">Foi multado indevidamente, tudo bem você não está sozinho, posso ajudá-lo?</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
        <a href={wapp} target="_blank" rel="noreferrer">
            <button className="flex justify-center px-10 bg-transparent border border-white py-2 rounded-full transition duration-500 hover:bg-blue-900 hover:opacity-60">
              <h2 className="text-white text-2xl pr-3">Vamos conversar</h2>
              <Image src='/whatsapp.png' alt="Imagem" width={30} height={30} />
            </button>
          </a>
        </div>

        <div className="text-center pt-16">
          <p className="text-xl text-slate-800">OAB 417.198 SP<span className='px-8'>|</span><span className="text-xl"><a href={"#"} target="_blank" rel="noreferrer" onClick={handleEmailClick}>advogado@rodneyrinaldi.com</a></span></p>
        </div>
      </>
    )
  }
  
  const mobileComponent = () => {  
    return(
      <>
        <div className="flex justify-center space-x-4 py-0 bg-white border-b border-slate-700 shadow-2xl">
          <Image src='/transito.png' alt="Imagem" width={1011} height={716} />
        </div>

        <div className="flex justify-center space-x-4 py-3 bg-white border-b border-slate-700 shadow-2xl">
          <h1 className="font-nunito text-2xl text-slate-900">Advogado Rodney Rinaldi
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <div className="flex items-center p-4">
            <div className="rounded-full overflow-hidden mr-4">
              <Image src='/image4.png' alt="Imagem" width={90} height={90} className="rounded-full" />
            </div>
            <div className="bg-gray-200 p-3 rounded-lg">
              <p className="font-nunito text-base text-gray-800 text-justify hyphenate">Foi multado indevidamente, tudo bem você não está sozinho, posso ajudá-lo?</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
        <a href={wapp} target="_blank" rel="noreferrer">
            <button className="flex justify-center px-10 bg-transparent border border-white py-2 rounded-full">
              <h2 className="text-xl text-white pr-3">Vamos conversar</h2>
              <Image src='/whatsapp.png' alt="Imagem" width={24} height={24} />
            </button>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-slate-800">OAB 417.198 SP  |  <span className="text-base"><a href={"#"} target="_blank" rel="noreferrer" onClick={handleEmailClick}>advogado@rodneyrinaldi.com</a></span></p>
        </div>
      </>
    )
  }

  return(
    <>{isMobile ? mobileComponent() : monitorComponent()}</>
  )
}

export default Componente
