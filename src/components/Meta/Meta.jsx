import Head from "next/head";

const Meta = ({ title, description, image }) => (
  <Head>
    {/* Standard metadata */}
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph metadata */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />

    {/* Additional metadata */}
    <meta name="twitter:card" content="Mockland" />

    {/* Favicons */}
    <link rel="icon" href="/MocklandLogo.ico" />
  </Head>
);

export default Meta;
