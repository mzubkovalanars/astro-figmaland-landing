import { sanityClient } from 'sanity:client';
import { type SlugValidationContext } from 'sanity';
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

export async function isUniqueOtherThanLanguage(slug: string, context: SlugValidationContext) {
  const { document, getClient } = context;
  if (!document?.language) {
    return true;
  }
  const client = getClient({ apiVersion: '2024-07-23' });
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && language == $language][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}
