import Head from "next/head";
import { Header } from "@/components/Header/Header";
import styles from "./styles.module.scss";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { FiUpload } from "react-icons/fi";
import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";

export default function Product() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
        toast.error('Envie uma Imagem')
        return
    }
    const image = e.target.files[0]
    if (!image) {
        return
    } 
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image)
        setAvatarUrl(URL.createObjectURL(image))
    }
  }
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
            <label className={styles.labelAvatar}>
              <span>
                <FiUpload size={25} color="#fff" />
              </span>

              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />

              {avatarUrl && (
                <img
                  className={styles.preview}
                  src={avatarUrl}
                  alt="Foto do Produto"
                  width={250}
                  height={250}
                />
              )}
            </label>

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
