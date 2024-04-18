import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Cadastre-se Agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo img" />
        <div className={styles.login}>
            <h1>Crie sua conta!</h1>
          <form>
          <Input placeholder="Digite seu Nome" type="text" />
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Sua senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link legacyBehavior href="/">
            <a className={styles.text}>Já possui uma conta? Entre aqui!</a>
          </Link>
        </div>
      </div>
    </>
  );
}
