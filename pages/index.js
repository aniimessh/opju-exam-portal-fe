import Head from "next/head";
import { OpButton } from "@/atoms";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Page Setup</h1>
        <OpButton variant="contained">Microsoft 1</OpButton>
        <OpButton variant="secondary">Microsoft 2</OpButton>
      </main>
    </>
  );
}

/**
 *
 * smaller - atom -> button , radio
 *
 */
