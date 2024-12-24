import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@sanityClient/client';
import type { PortableTextValue } from '@utils/interfaces';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        width='200'
        height='200'
        loading='lazy'
        alt={value.alt || ''}
        src={urlFor(value).format('webp').quality(100).url()}
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className='font-grotesk text-3xl font-bold'>{children}</h1>,
    h2: ({ children }) => <h2 className='font-grotesk text-2xl font-semibold'>{children}</h2>,
    normal: ({ children }) => <p className='font-grotesk'>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 font-grotesk italic text-gray-600'>
        {children}
      </blockquote>
    ),
  },
};

interface CustomPortableTextProps {
  value: PortableTextValue | PortableTextValue[];
}

const CustomPortableText: React.FC<CustomPortableTextProps> = ({ value }) => {
  return value ? <PortableText value={value} components={components} /> : null;
};

export default CustomPortableText;
