"use client"

import { useEffect, useState } from 'react'
import Card from "../../components/compliance/ComplianceDetails"
import { GetComplaints } from '../../components/utils/ApiCalls'
import { Skeleton } from "../../components/ui/skeleton"

const Complain = () => {
    const [complaints, setComplaints] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await GetComplaints()
                console.log("This is the complaint response", response)
                if (response?.data) {
                    console.log("This is the complaint response", response)
                    setComplaints(response.data)
                } else {
                    setComplaints([])
                }
            } catch (error) {
                console.error("Error fetching complaints:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchComplaints()
    }, [])

    const SkeletonCard = () => (
        <div className="w-full md:w-[48%] lg:w-[31%] mb-4 p-4 border rounded-lg shadow-sm">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-20 w-full mb-2" />
            <Skeleton className="h-8 w-1/4" />
        </div>
    )

    return (
        <div className='w-[95%] bg-[#fff] h-[100%] pt-[20px] flex justify-center items-center pb-[30px] mt-[70px]'>
            <div className='w-[100%] flex gap-8 items-start flex-wrap'>
                {loading ? (
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                ) : complaints.length > 0 ? (
                    complaints.map((complaint: any) => (
                        <Card
                            key={complaint.id}
                            storeId={complaint.store?.id || 'N/A'}
                            agentId={complaint.user?.id || 'N/A'}
                            category={complaint.category || 'N/A'}
                            name={`${complaint.user?.firstname || 'N/A'} ${complaint.user?.lastname || 'N/A'}`}
                            agentName={complaint.user?.firstname || 'N/A'} 
                            timeDate={new Date(complaint.createdAt).toLocaleString()}
                            description={complaint.message || 'No description available'}
                            replies={complaint.replies || []}
                            id={complaint.id || 'N/A'} 
                            complaint={complaint}
                        />
                    ))
                ) : (
                    <div>No complaints available</div>
                )}
            </div>
        </div>
    )
}

export default Complain