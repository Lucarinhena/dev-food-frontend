import { AuthContext } from "@/contexts/AuthContext";
import { Header } from "@/components/Header/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { FiRefreshCcw } from "react-icons/fi";
import styles from "./styles.module.scss";
import { useContext } from "react";
import Head from "next/head";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Painel DevFood</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Olá veja seus últimos pedidos:</h1>
            <button>
              <FiRefreshCcw color="#3fffa3" />
            </button>
          </div>

          <article className={styles.listOrders}>
            <section className={styles.orderItem}>
              <button>
                <div className={styles.tag}></div>
                <span>Mesa 30</span>
              </button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});
