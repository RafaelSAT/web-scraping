"use client"

import { FormEvent, useState } from "react"

const isLinkAmazonProduto = (url: string) =>{
  try {
    const parseURL = new URL (url);
    const hostname = parseURL.hostname;

    if(
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
      ){
        return true;
      }
  } catch (error) {
    return false;
  }
  return false;
}

const BarraPesquisa = () => {

  const [pesquisaPrompt, setPesquisaPrompt] = useState('');
  const [estaCarregando, setEstaCarregando] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isLinkAmazonValido = isLinkAmazonProduto(pesquisaPrompt);

    if(!isLinkAmazonValido) return alert ("Por favor, insira um  link da Amazon válido");

    try {
      setEstaCarregando(true);
    } catch (error) {
      console.log(error);
    } finally {
      setEstaCarregando(false);
    }
  }

  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input type="text" value={pesquisaPrompt} onChange={(e) => setPesquisaPrompt(e.target.value)} placeholder="Link do produto" className="searchbar-input"/>
        <button type="submit" className="searchbar-btn"
        disabled={pesquisaPrompt === ''}
        >{estaCarregando ? 'Pesquisando...' : 'Pesquisar'}</button>
    </form>
  )
}

export default BarraPesquisa