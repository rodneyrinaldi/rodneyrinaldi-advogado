// Importando os módulos necessários
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Definindo o componente
const Componente = () => {
  // Definindo o estado isMobile usando o hook useState
  const [isMobile, setIsMobile] = useState(false)

  // Definindo uma função para atualizar o estado isMobile de acordo com a largura da janela
  const handleResize = () => {
    // Se a largura da janela for menor que 900px, isMobile será true
    if (window.innerWidth < 900) {
      setIsMobile(true)
    } else {
      // Caso contrário, isMobile será false
      setIsMobile(false)
    }
  }

  // Usando o hook useEffect para executar a função handleResize quando o componente for montado e quando a janela for redimensionada
  useEffect(() => {
    // Executando a função handleResize uma vez quando o componente for montado
    handleResize()
    // Adicionando um evento de redimensionamento da janela que chama a função handleResize
    window.addEventListener('resize', handleResize)
    // Retornando uma função de limpeza que remove o evento de redimensionamento da janela
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Definindo o estilo do componente usando tailwind
  const estilo = `h-screen w-screen bg-blue-100 flex flex-col justify-center items-center
  ${isMobile ? 'p-6' : 'p-10 max-w-screen-md mx-auto'} shadow-lg`
  const logo = `${isMobile ? '/imagemobi.jpeg' : '/image.jpeg'}`

  // Retornando o JSX do componente
  return (
    <div className={estilo}>
      {/* Header com título */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">Título do Componente</h1>
      </div>
      {/* Imagem centralizada */}
      <div className="my-8">
        <Image src={logo} alt="Imagem" width={1011} height={716} />
      </div>
      {/* Menu horizontal com duas opções */}
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Opção 1</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Opção 2</button>
      </div>
      {/* Footer centralizado */}
      <div className="text-center">
        <p className="text-sm text-black">© Copilot 2024</p>
      </div>
    </div>
  )
}

// Exportando o componente
export default Componente
