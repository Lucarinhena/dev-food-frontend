import Head from "next/head";
import Image from "next/image";
import logoImg from "../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevFood - Faça seu login!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo img" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Entrar
            </Button>
          </form>
          <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
        </div>
      </div>
    </>
  );
}
