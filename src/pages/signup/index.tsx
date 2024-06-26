import Head from "next/head";
import { FormEvent, useState } from "react";
import Image from "next/image";
import logoImg from "../../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import styles from "../../styles/Home.module.scss";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup(e: FormEvent) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error('Preencha todos os campos')
      return;
    }
    setLoading(true);
    let data = {
      name,
      email,
      password,
    };

    setTimeout(async () => {
      await signUp(data);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>Cadastre-se Agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo img" />
        <div className={styles.login}>
          <h1>Crie sua conta!</h1>
          <form onSubmit={handleSignup}>
            <Input
              placeholder="Digite seu Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
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
