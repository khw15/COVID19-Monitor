import React from 'react';

const Kontak = () => {
    return (
        <table className="table-auto mx-auto shadow rounded-b-md">
            <colgroup>
                <col width="60%" />
                <col width="40%" />
            </colgroup>
            <thead>
                <tr className="bg-gray-200">
                    <th className="border-b px-2 md:px-4 py-4 font-medium text-left rounded-tl-md text-sm md:text-base noselect">
                        Kementerian/Lembaga
                    </th>
                    <th className="border-b border-1 px-2 md:px4 py-4 font-medium rounded-tr-md text-sm md:text:base noselect">
                        Kontak Layanan
                    </th>
                </tr>
            </thead>
            <tbody translate="no">

                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Halo Kemkes
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="tel:119" 
                            className="text-blue-400 block p-2">
                            119 ext. 9
                        </a>
                    </td>
                </tr>

                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Pengaduan Bansos Kementerian Sosial
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="tel:157" 
                            className="text-blue-400 block p-2">
                            157
                        </a>
                        <span className="text-xs">
                            <a 
                                href="mailto:bansoscovid19@kemsos.go.id">
                                Kirim surel
                            </a>
                        </span>
                        <br></br>
                    </td>
                </tr>

                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Bantuan Langsung Tunai Desa
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="tel:1500040" 
                            className="text-blue-400 block p-2">
                            1500040
                        </a>
                    </td>
                </tr>
                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Pembebasan Biaya Listrik (PLN)
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="tel:123" 
                            className="text-blue-400 block p-2">
                            123
                        </a>
                        <span className="text-xs">
                            <a 
                                href="mailto:pln123@pln.co.id">
                                Kirim surel
                            </a>
                        </span>
                        <br></br>
                        <span className="text-xs">
                            <a 
                                href="https://wa.me/628122123123?text=PLN" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Kirim pesan via WhatsApp
                            </a>
                        </span>
                    </td>
                </tr>

                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Restrukturisasi Kredit OJK
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="tel:157" 
                            className="text-blue-400 block p-2">
                            157
                        </a>
                        <span className="text-xs">
                            <a 
                                href="mailto:konsumen@ojk.go.id">
                                Kirim surel
                            </a>
                        </span>
                        <br></br>
                        <span className="text-xs">
                            <a 
                                href="https://wa.me/6281157157157" 
                                target="noopener noreferrer">
                                Kirim pesan via WhatsApp
                            </a>
                        </span>
                    </td>
                </tr>

                <tr className="bg-white">
                    <td className="border-b px-2 md:px-4 py-2 text-left text-sm md:text-base noselect">
                        Ombudsman Pusat
                    </td>
                    <td className="border-b border-l px-2 md:px-4 py-2 text-sm md:text-base">
                        <a 
                            href="mailto:covid19-pusat@ombudsman.go.id" 
                            className="text-blue-400 text-s block p-2">
                            Kirim surel
                        </a>
                    </td>
                </tr>

            </tbody>
        </table>
    )
};

export default Kontak