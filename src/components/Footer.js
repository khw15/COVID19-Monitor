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
            title="andrew-paglinawan"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            andrew-paglinawan
          </a>
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          API oleh{' '}
          <a 
          href="https://disease.sh/" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title="disease.sh &#8211; Open Disease API"
          >
            disease.sh &#8211; Open Disease API
          </a>
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          Dipersembahkan oleh{' '}
          <a 
          href="mailto:i315@i315.my.id" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title="i315"
          >
            i315
          </a>{' '}
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          Versi{' '}
          <a 
            href="https://maps.covid19.i315.my.id/" 
            className="text-blue-500">
            lainnya
          </a>{' '}
          dengan peta sebaran per negara
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1 text-red-600">
          <afiliasi>
              SITUS INI TIDAK BERAFILIASI DENGAN PEMERINTAH
          </afiliasi>
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1 text-red-600">
          <afiliasi>
            Segala kesalahan dan/atau kerugian yang ditimbulkan oleh data yang ditayangkan di 
            situs ini bukan tanggung jawab pengembang
          </afiliasi>
        </span>
      </p>
    </footer>
  )
}

export default Footer
