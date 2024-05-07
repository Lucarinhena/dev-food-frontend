import Head from "next/head";
import { Header } from "@/components/Header/Header";
import styles from "./styles.module.scss";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>
            <select>
              <option>Bebidas</option>
              <option>Bebidas</option>
            </select>

            <input
              type="text"
              placeholder="Digite o nome do Produto"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Digite o preço do Produto"
              className={styles.input}
            />

            <textarea
              placeholder="Descreva seu produto"
              className={styles.input}
            />
          </form>

          <button className={styles.buttonAdd} type="submit">
            Cadastrar Produto
          </button>
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
