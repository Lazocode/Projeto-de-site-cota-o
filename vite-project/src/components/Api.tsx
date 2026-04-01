import { useState, useEffect } from "react";

// Componente de cotação.
 export const Meucomponente = () => {
  const [cotacao, setCotacao] = useState(null);
  const [moeda, setMoeda] = useState('BRL');

  useEffect(() => {
      fetchData();
    }, [moeda]);

// Função para buscar a cotação da moeda selecionada.
  async function fetchData() {

// Substitua 'USD' pela moeda desejada, por exemplo, 'EUR', 'GBP', etc.
  const api = await fetch(`https://v6.exchangerate-api.com/v6/d5b598e24aae6ecbae55314e/latest/${moeda}`);
  const resposta = await api.json();
  setCotacao(resposta);
  console.log(cotacao);
}

// Renderização do componente.
   return(
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-[#0f0f0f]">

      <div className="bg-[#0504045e] rounded-2xl p-10 py-10 shadow-xl w-auto md:w-96">
      <h1 className="text-4xl text-center text-white font-bold">Cotação: {cotacao ? cotacao.conversion_rates.BRL : 'Carregando...'}</h1>

      <select className="text-white flex bg-[#0504045e] border border-gray-600" value={moeda} onChange={(e) => setMoeda(e.target.value)}>
        <option className="text-black" value="USD">USD</option>
        <option className="text-black" value="EUR">EUR</option>
        <option className="text-black" value="GBP">GBP</option>
        <option className="text-black" value="BRL">BRL</option>
      </select>
      </div>

    </div>
   )
}