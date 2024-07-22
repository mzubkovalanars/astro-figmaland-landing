import React from 'react';

interface StatusInfoProps {
  text: string;
}

const StatusInfo: React.FC<StatusInfoProps> = ({ text }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-16 sm:p-5'>
      <img src='/images/success.png' width={128} height={128} />
      <p className='text-3xl text-center'>{text}</p>
    </div>
  );
};

export default StatusInfo;
