import { sanityClient } from 'sanity:client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import type { Product } from '@/utils/interfaces';

export async function getProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && defined(slug.current)] | order(_createdAt desc)`;
    const data: Product[] = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export const getProduct = async (slug: string): Promise<Product> => {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const data: Product = await sanityClient.fetch(query, {
      slug,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw new Error(`Failed to fetch product with slug ${slug}`);
  }
};

export const imageBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return imageBuilder.image(source);
};
