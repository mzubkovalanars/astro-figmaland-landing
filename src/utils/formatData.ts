export const formatNameFromKey = (key: string): string => {
  if (!key) {
    return '';
  }
  return key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
