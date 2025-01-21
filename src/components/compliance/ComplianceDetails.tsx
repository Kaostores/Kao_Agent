'use client'

import React, { useState } from "react";
import { useAddReplyToComplaintMutation } from "../services/apiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import { ChevronDown } from "lucide-react";

interface Reply {
    _id: string;
    reply: string;
    createdAt: string;
}

interface Complaint {
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

interface Iprops {
    complaint: Complaint;
    isOpen: boolean;
    onClose: () => void;
}

const ComplianceDetails: React.FC<Iprops> = ({ complaint, isOpen, onClose }) => {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");
    const [addReply, { isLoading }] = useAddReplyToComplaintMutation();
    const [replies, setReplies] = useState<Reply[]>(complaint.replies);

    console.log("this is the complaint", complaint);

    const handleSendReply = async () => {
        if (replyMessage.trim()) {
            try {
                const response = await addReply({ complainID: complaint.complaint.id, message: replyMessage });
                console.log(response);
                const newReply: Reply = {
                    _id: response.data._id,
                    reply: replyMessage,
                    createdAt: new Date().toISOString(),
                };

                setReplies((prevReplies) => [...prevReplies, newReply]);
                setReplyMessage("");
                setShowReplyInput(false);
                toast.success("Reply sent");
            } catch (error: any) {
                console.error("Failed to send reply:", error.message);
                toast.error("Failed to send reply");
            }
        } else {
            toast.error("Reply message cannot be empty");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] h-[600px] overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>Complaint Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-[30px]">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="font-bold">Store ID:</span> {complaint.storeId}
                        </div>
                        <div>
                            <span className="font-bold">Store Name:</span> {complaint.name}
                        </div>
                        <div>
                            <span className="font-bold">Agent ID:</span> {complaint.agentId}
                        </div>
                        <div>
                            <span className="font-bold">Agent Name:</span> {complaint.agentName}
                        </div>
                        <div>
                            <span className="font-bold">Complaint Category:</span> {complaint.category}
                        </div>
                        <div>
                            <span className="font-bold">Time|Date:</span> {complaint.timeDate}
                        </div>
                    </div>

                    <div className="bg-muted p-3 rounded-md text-sm">
                        {complaint.description}
                    </div>

                    <div>
                        <h3 className="font-bold mb-2 text-sm">Replies</h3>
                        <ScrollArea className="h-[150px] w-full rounded-md border border-[#0333ae] p-4">
                            {replies.length > 0 ? (
                                replies.map((reply) => (
                                    <div key={reply._id} className="mb-3">
                                        <div className="text-primary font-semibold text-xs">
                                            {new Date(reply.createdAt).toLocaleString()}
                                        </div>
                                        <div className="text-sm">{reply.reply}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-sm text-muted-foreground">No replies yet.</div>
                            )}
                        </ScrollArea>
                    </div>

                    {showReplyInput ? (
                        <div className="space-y-2">
                            <Textarea
                                value={replyMessage}
                                onChange={(e) => setReplyMessage(e.target.value)}
                                placeholder="Type your reply here..."
                                rows={3}
                            />
                            <Button className="bg-[#0333ae] hover:bg-[#0333ae]" onClick={handleSendReply} disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send reply"}
                            </Button>
                        </div>
                    ) : (
                        <Button className="bg-[#0333ae] hover:bg-[#0333ae]" onClick={() => setShowReplyInput(true)}>
                            Send reply
                        </Button>
                    )}

                    <div className="flex justify-between items-center">
                        <Button variant="outline" className="text-xs">
                            Display action <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-[#0333ae] hover:bg-[#0333ae]" onClick={onClose}>Done</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ComplianceDetails;