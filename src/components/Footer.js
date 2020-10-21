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
          </a>, {' '}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>, dan {' '}
          <a
            href="https://www.flaticon.com/authors/becris"
            title="Becris"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Becris
          </a>
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          Data oleh{' '}
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
          Developed with 💙 on Earth by{' '}
          <a 
          href="https://github.com/Zenn315/COVID19-Monitor" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Zenn" 
          >
            Zenn
          </a>{' '}
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          Layanan CDN dan hosting oleh{' '}
          <a 
          href="https://www.netlify.com/" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title="Netlify &#8211; All-in-one platform for automating modern web projects"
          >
            Netlify
          </a>{' '}
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          <a href="https://s.id/DMCA-Covid19" title="Proteksi DMCA.com" target="_blank" rel="noopener noreferrer">
            Dilindungi oleh DMCA
          </a>
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1 text-red-600">
          <afiliasi>
            Segala kesalahan dan/atau kerugian yang timbul oleh data yang ditayangkan di 
            situs ini bukan tanggungjawab pengembang
          </afiliasi>
        </span>
      </p>
    </footer>
  )
}

export default Footer
