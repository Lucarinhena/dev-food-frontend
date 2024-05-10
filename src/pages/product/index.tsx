import Head from "next/head";
import { Header } from "@/components/Header/Header";
import styles from "./styles.module.scss";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { FiUpload } from "react-icons/fi";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { setupApiClient } from "@/services/api";

type ItemProps = {
  id: string;
  name: string;
};

interface CategoryProps {
  categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);
  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      toast.error("Envie uma Imagem");
      return;
    }
    const image = e.target.files[0];
    if (!image) {
      return;
    }
    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(image));
    }
  }

  function handleChangeCategory(e) {
    setCategorySelected(e.target.value);
  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    try {
      const data = new FormData();

      if (
        name === "" ||
        price === "" ||
        description === "" ||
        imageAvatar === null
      ) {
        toast.error("Por favor preencha os campos!");
        return;
      }

      data.append("name", name);
      data.append("price", price);
      data.append("description", description);
      data.append("category_id", categories[categorySelected].id);
      data.append("file", imageAvatar);

      const apiClient = setupApiClient();
      await apiClient.post("/product", data);
      toast.success("Produto cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops, erro ao Cadastrar");
    }
    setName("");
    setPrice("");
    setDescription("");
    setImageAvatar(null);
    setAvatarUrl('');
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

          <form className={styles.form} onSubmit={handleRegister}>
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

            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="Digite o nome do Produto"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Digite o preço do Produto"
              className={styles.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
              placeholder="Descreva seu produto"
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className={styles.buttonAdd} type="submit">
              Cadastrar Produto
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  const response = await apiClient.get("/category");

  return {
    props: {
      categoryList: response.data,
    },
  };
});
