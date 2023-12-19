import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const icones_navegacao = [
  {src: '/assets/icons/search.svg', alt: 'pesquisar'},
  {src: '/assets/icons/black-heart.svg', alt: 'coração'},
  {src: '/assets/icons/user.svg', alt: 'usuário'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt='logo'
          />
          <p className='nav-logo'>
            Price<span className='text-primary'>Wise</span>
          </p>
        </Link>
        <div className='flex items-center gap-5'>
          {icones_navegacao.map((icone) => (
            <Image 
              key={icone.alt}
              src={icone.src}
              alt={icone.alt}
              width={28}
              height={28}
              className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar