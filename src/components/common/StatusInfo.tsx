import React from 'react';
import ErrorImg from '@assets/images/caution.png';
import SuccessImg from '@assets/images/success.png';

interface StatusInfoProps {
  status: 'success' | 'error';
  text: string;
}

const StatusInfo: React.FC<StatusInfoProps> = ({ text, status }) => {
  const statusImg = status === 'success' ? SuccessImg : ErrorImg;
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-16 sm:p-5'>
      <img src={statusImg.src} width={128} height={128} alt={status} />
      <p className='text-center text-3xl'>{text}</p>
    </div>
  );
};

export default StatusInfo;
