import Head from "next/head";
interface headerProps {
  title?: string;
  secondT?: string;
}
export function Header({ title, secondT }: headerProps) {
  return (
    <Head>
      <meta name="og:title" content="Kaolhou" />
      <meta
        property="og:image"
        content="https://kaolhou-dev.vercel.app/favicon.jpg"
      />
      <meta
        property="og:description"
        content="A Curriculum Website by André Mendes"
      />

      <meta name="twitter:title" content="Kaolhou" />
      <meta
        name="twitter:description"
        content="A Curriculum Website by André Mendes"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@kaolhou" />
      <meta
        name="twitter:image"
        content="https://kaolhou-dev.vercel.app/favicon.jpg"
      />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <link
        rel="apple-touch-icon"
        href="https://kaolhou-dev.vercel.app/favicon.jpg"
      />
      <title>{title || secondT || "Kaolhou"}</title>
    </Head>
  );
}
