export const getStrapiURL = () => {
  return (
    process.env.STRAPI_API_URL ??
    "https://dedicated-pleasure-920f043aa1.strapiapp.com"
  );
};
