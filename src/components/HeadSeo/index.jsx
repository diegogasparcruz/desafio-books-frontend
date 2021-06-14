import Head from 'next/head';

export const HeadSeo = ({ title, metaDescription }) => (
  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta itemProp="name" content={title} />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </>
    )}
    {metaDescription && (
      <>
        <meta name="description" content={metaDescription} />
        <meta itemProp="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
      </>
    )}
  </Head>
);
