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
            Andrew Paglinawan
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
          href="https://github.com/i315/COVID19-Monitor" 
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          >
            i315
          </a>{' '}
        </span>
      </p>
      <p className="flex flex-col md:flex-row justify-center items-center leading-tight text-xs">
        <span className="p-1">
          <a href="https://www.dmca.com/Protection/Status.aspx?ID=2d3cbc92-e9c1-475d-9d44-4ba74266d262&refurl=https://covid19.alfaisal.my.id/" title="Status Proteksi DMCA.com" class="dmca-badge" target="_blank" rel="noopener noreferrer">
            Dilindungi oleh DMCA
          </a>
          <script src="/assets/script/DMCABadgeHelper.min.js"></script>
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
