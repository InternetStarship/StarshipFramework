import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>StarshipFramework.com</title>
        <meta
          name="description"
          content="Create Internal Internet Marketing Apps using StarshipFramework"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Homepage.</h1>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </div>
    </div>
  );
}
