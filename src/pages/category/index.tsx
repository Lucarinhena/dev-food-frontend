import Head from "next/head";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header/Header";
import { useState, FormEvent } from "react";
import { setupApiClient } from "@/services/api";
import { toast } from "react-toastify";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (name === ''){
        toast.error('O nome não pode ser vazio')
        return
    }

    const apiClient = setupApiClient()
    await apiClient.post('/category', {
        name: name
    })

    toast.success('Categoria cadastrada com sucesso!')
    setName('')
  }

  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar Nova Categoria</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
            />

            <button type="submit" className={styles.buttonAdd}>
              Cadastrar
            </button>
          </form>
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
  
