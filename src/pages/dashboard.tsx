import { canSSRAuth } from "@/utils/canSSRAuth";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel DevFood</title>
      </Head>
      <div>
        <Header/>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
