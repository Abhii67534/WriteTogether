"use client";

import { useRouter } from 'next/navigation';
import axios from 'axios';
import React from 'react';

interface AddDocumentBtnProps {
  userId: string; 
  email: string;  
}

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const DocumentHandler = async () => {
    const UserData = {
      userId: userId,
      email: email,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/create-room', UserData);

      if (response.status === 200) {
        const { room } = response.data; // Assuming your API returns room data
        router.push(`/documents/${room.id}`); // Redirect to the created document
      }
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  return (
    <button className='bg-blue-500 rounded-md h-[40px] w-[200px] font-semibold text-black' onClick={DocumentHandler}>
      Start a blank document
    </button>
  );
};

export default AddDocumentBtn;
