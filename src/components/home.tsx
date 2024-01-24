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
        <div className="flex justify-center space-x-4 py-0 bg-white">
          <Image src='/image3.png' alt="Imagem" width={505} height={358} />
        </div>

        <div className="flex justify-center space-x-4 py-8 bg-white">
          <h1 className="font-nunito text-4xl text-slate-900">Rodney Rinaldi 
            <span className="pl-2 text-lg font-bold text-slate-900">ADVOGADO</span>
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <h2 className="text-white text-2xl py-6 px-10 text-justify">Tem assuntos legais para resolver? Você não está sozinho, como posso ajudá-lo?</h2>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
        <a href={wapp} target="_blank" rel="noreferrer">
            <button className="flex justify-center px-10 bg-transparent border border-white py-2 rounded-full transition duration-500 hover:bg-blue-900 hover:opacity-60">
              <h2 className="text-white text-2xl pr-3 font-semibold">MANDE SUA MENSAGEM</h2>
              <Image src='/whatsapp.png' alt="Imagem" width={30} height={30} />
            </button>
          </a>
        </div>

        <div className="text-center pt-20">
          <p className="text-xl text-slate-800">OAB 417.198 SP  |  <span className="text-xl"><a href={"#"} target="_blank" rel="noreferrer" onClick={handleEmailClick}>advogado@rodneyrinaldi.com</a></span></p>
        </div>
      </>
    )
  }
  
  const mobileComponent = () => {  
    return(
      <>
        <div className="flex justify-center space-x-4 py-0 bg-white border-b border-slate-700 shadow-2xl">
          <Image src='/image3.png' alt="Imagem" width={1011} height={716} />
        </div>

        <div className="flex justify-center space-x-4 py-3 bg-white border-b border-slate-700 shadow-2xl">
          <h1 className="font-nunito text-2xl text-slate-900">Rodney Rinaldi 
            <span className="pl-2 text-xs font-bold text-slate-900">ADVOGADO</span>
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <h2 className="text-white text-base px-10 text-justify">Tem assuntos legais para resolver? Você não está sozinho, como posso ajudá-lo?</h2>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
        <a href={wapp} target="_blank" rel="noreferrer">
            <button className="flex justify-center px-10 bg-transparent border border-white py-2 rounded-full">
              <h2 className="text-white pr-3 font-semibold">MANDE SUA MENSAGEM</h2>
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
