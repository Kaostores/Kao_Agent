import React from "react";
import ComplianceDetails from "../compliance/ComplianceDetails";

interface Reply {
    _id: string;
    reply: string;
    createdAt: string;
}

interface Data {
    storeId: string;
    agentId: string;
    category: string;
    name: string;
    agentName: string;
    timeDate: string;
    description: string;
    replies: Reply[];
    id: string;

    complaint: any;
}

const Card: React.FC<Data> = ({
    storeId,
    agentId,
    category,
    name,
    agentName,
    timeDate,
    description,
    replies,
    id,
    complaint
}) => {
    const [show, setShow] = React.useState(false);

    const toggleBtn = () => {
        setShow(!show);
    };

    return (
        <div className='w-[320px] rounded-[5px] flex justify-center items-center bg-[#ddd] mb-[20px]'>
            <div className='w-[96%] flex flex-col py-[10px] px-[10px]'>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px]'>Store id:</div>
                    <div className='text-[14px] text-[#0333ae]'>{storeId}</div>
                </div>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px]'>Agent id:</div>
                    <div className='text-[14px] text-[#0333ae]'>{agentId}</div>
                </div>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px]'>Complaint category:</div>
                    <div className='text-[14px] text-[#0333ae]'>{category}</div>
                </div>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px]'>Store name:</div>
                    <div className='text-[14px] text-[#0333ae]'>{name}</div>
                </div>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px]'>Agent name:</div>
                    <div className='text-[14px] text-[#0333ae]'>{agentName}</div>
                </div>
                <div className='flex items-center mb-[15px]'>
                    <div className='text-[13px] font-bold mr-[10px] text-[#818181]'>Time|Date:</div>
                    <div className='text-[14px] text-[#818181]'>{timeDate}</div>
                </div>
                <button
                    className='w-[130px] z-10 cursor-pointer flex justify-center items-center rounded-[5px] py-[5px] bg-[white] border-solid border-[#0000ff] border-[1px]'
                    onClick={toggleBtn}
                >
                    <div className='text-[#0333ae] text-[14px]'>View more</div>
                </button>
                {show ? (
                    <ComplianceDetails
                        complaint={{ storeId, agentId, category, name, agentName, timeDate, description, replies, id,  complaint }} 
                        isOpen={show}
                        onClose={() => setShow(false)}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Card;
