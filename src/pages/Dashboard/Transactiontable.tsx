import React from 'react'

const Transactiontable = () => {
    const tableItems = [
        {
            name: "Mera mera",
            items: "7,540",
            amount: "N1,898,000",
        },
        {
            name: "Philip Morris International",
            items: "6011",
            amount: "N1,898,000",
        },
        {
            name: "Donna Karan",
            items: "6001",
            amount: "N1,898,000",
        },
        {
            name: "Marco Pollo",
            items: "4500",
            amount: "N1,898,000",
        },
        {
            name: "Dolce  Gabbana",
            items: "3000",
            amount: "N1,898,000",
        },
      ]
  return (
    <div className="relative h-max overflow-auto mt-[10px]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Name</th>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Items</th>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.name}</td>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.items}</td>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
  )
}

export default Transactiontable