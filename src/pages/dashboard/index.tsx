import { AuthContext } from "@/contexts/AuthContext";
import { Header } from "@/components/Header/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { FiRefreshCcw } from "react-icons/fi";
import styles from "./styles.module.scss";
import { api } from "@/services/apiClient";
import { useContext, useState } from "react";
import Head from "next/head";
import { setupApiClient } from "@/services/api";

type OrderTypes = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
};

interface HomeProps {
  orders: OrderTypes[];
}

export default function Dashboard({ orders }: HomeProps) {
  const { user } = useContext(AuthContext);
  const [orderList, setOrderList] = useState(orders || []);

  function handleModalView(id: string) {

    alert('ID do Pedido' + id);
  }
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
            {orderList.map((item) => (
              <section key={item.id} className={styles.orderItem}>
                <button onClick={()=> handleModalView(item.id) }>
                  <div className={styles.tag}></div>
                  <span>
                    <strong>Mesa {item.table}: </strong>
                  </span>
                </button>
              </section>
            ))}
          </article>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);

  const response = await apiClient.get("/orders");
  return {
    props: {
      orders: response.data,
    },
  };
});
