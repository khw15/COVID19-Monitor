import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-3 text-center noselect">
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          Ikon oleh{' '}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smashicons
          </a> dan {' '}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </span>
        <span className="p-1">
          Fon oleh {' '}
          <a 
            href="https://github.com/andrew-paglinawan/QuicksandFamily"
            title="Atribusi Font"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            andrew-paglinawan
          </a>
        </span>
        <span className="p-1">
          {'</>'} with 💙 by{' '}
          <a 
          href="mailto:webmaster@alfaisal.my.id" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          >
            더-Quiett
          </a>{' '}
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          API oleh{' '}
          <a 
          href="https://github.com/mathdroid/covid-19-api" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          >
            MathDroid Covid API
          </a>
        </span>
        </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <afiliasi>
          <span className="p-1 text-red-600">
            KAMI TIDAK BERAFILIASI DENGAN PEMERINTAH
          </span>
        </afiliasi>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <disclaimer-kerugian>
          <span className="p-1 text-red-600">
            Segala kesalahan dan/atau kerugian yang ditimbulkan oleh data yang ditayangkan di 
            situs ini bukan tanggung jawab pengembang
          </span>
        </disclaimer-kerugian>
      </p>
    </footer>
  )
}

export default Footer
