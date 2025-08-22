import qs from "qs";
import { fetchAPI } from "../utils/fetch-api";
import { getStrapiURL } from "../utils/gatStrapiUrl";

const query = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-block": {
          populate: {
            bgImage: { fields: ["url", "alternativeText"] },
            personImage: { fields: ["url", "alternativeText"] },
            cta: true,
          },
        },
        "blocks.team-block": {
          populate: {
            member: {
              populate: {
                memberPhoto: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "blocks.testimonials-block": {
          populate: {
            review: {
              populate: {
                clientPhoto: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
      },
    },
  },
});

export const getHomePage = async () => {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = `${query}`
  if(localStorage.getItem('lang') === "ar" ){
    url.search += `&locale=${localStorage.getItem('lang')}`
  }
  return await fetchAPI(url.href, { method: "GET" });
};

const globalQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: {
          populate: {
            dropdown: true,
          },
        },
        cta: true,
      },
    },
  },
});

export const getGlobalQuery = async () => {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;
  return await fetchAPI(url.href, { method: "GET" });
};

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    slug: {
      $eq: slug,
    },
    populate: {
      blocks: {
        on: {
          "blocks.sublink-services": {
            populate: {
              pointsLink: true
            }
          },
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}
