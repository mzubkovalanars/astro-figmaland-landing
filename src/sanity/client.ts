import { sanityClient } from 'sanity:client';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import type { Product } from '@/utils/interfaces';

export async function getProducts(language: string): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && language == $language] | order(_createdAt desc)`;
    const data: Product[] = await sanityClient.fetch(query, {
      language,
      _translations: `*[_type == "translation.metadata" && references(^._id)].translations[].value -> {language}`,
    });
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export const getProduct = async (slug: string, language: string): Promise<Product> => {
  try {
    const query = `*[_type == "product" && language == $language && slug.current == $slug][0]`;
    const data: Product = await sanityClient.fetch(query, {
      slug,
      language,
      _translations: `*[_type == "translation.metadata" && references(^._id)].translations[].value -> {language}`,
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
