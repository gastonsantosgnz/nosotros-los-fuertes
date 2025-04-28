import { Metadata as NextMetadata } from "next";

export interface MetaProps {
  title: string;
  description: string;
  baseURL: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  keywords?: string;
  canonical?: string;
  author?: {
    name: string;
    url?: string;
  };
}

export function generateMetadata({
  title,
  description,
  baseURL,
  path = "",
  type = "website",
  image,
  publishedTime,
  keywords,
  canonical,
  author,
}: MetaProps): NextMetadata {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const isFullUrl = (url: string) => /^https?:\/\//.test(url);

  const ogImage = image
    ? isFullUrl(image)
      ? image
      : `${normalizedBaseURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedBaseURL}/og?title=${encodeURIComponent(title)}`;

  const url = `${normalizedBaseURL}${normalizedPath}`;
  const canonicalUrl = canonical || url;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type,
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
      url,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(canonical ? { alternates: { canonical: canonicalUrl } } : {}),
    ...(author ? { authors: [{ name: author.name, url: author.url }] } : {}),
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;