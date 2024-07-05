import { formatNameFromKey } from '@/utils/formatData';

interface DisplayProps {
  data: Record<string, string | boolean | number>;
}

const DisplaySpecs = ({ data }: DisplayProps) => {
  if (!data) {
    return null;
  }
  return (
    <ul className='flex flex-col gap-3 items-start justify-start w-full p-2 border border-primary rounded-sm'>
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className='flex gap-2 items-center justify-between w-full'>
          <span className='text-sm'>{formatNameFromKey(key)}</span>
          <span className='text-lg'>
            {typeof value === 'boolean' ? (value ? '+' : '-') : value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DisplaySpecs;
