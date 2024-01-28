import React from 'react'

const Transactiontable = () => {
    const tableItems = [
        {
            id: "0984933",
            date: "2.3.2023",
            type: "Deposit",
            amount: "KAO 300",
        },
        {
            name: "Philip Morris International",
            items: "6011",
            type: "6011",
            amount: "N1,898,000",
        },
        {
            name: "Donna Karan",
            items: "6001",
            type: "6001",
            amount: "N1,898,000",
        },
        {
            name: "Marco Pollo",
            items: "4500",
            type: "4500",
            amount: "N1,898,000",
        },
        {
            name: "Dolce  Gabbana",
            items: "3000",
            type: "3000",
            amount: "N1,898,000",
        },
      ]
  return (
    <div className="relative h-max overflow-auto mt-[10px]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6 pl-6 text-[14px] text-[#797979]">ID Number</th>
                            <th className="py-3 pr-6 text-[14px] text-[#797979]">Date</th>
                            <th className="py-3 pr-6 text-[14px] text-[#797979]">Type</th>
                            <th className="py-3 pr-6 text-[14px] text-[#797979]">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-10 pl-10 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.id}</td>
                                    <td className="pr-10 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.date}</td>
                                    <td className="pr-10 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.type}</td>
                                    <td className="pr-10 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
  )
}

export default Transactiontable