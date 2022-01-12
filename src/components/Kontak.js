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
            </tbody>
        </table>
    )
};

export default Kontak