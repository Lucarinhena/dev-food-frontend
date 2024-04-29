import Head from "next/head";
import { FormEvent, useState } from "react";
import Image from "next/image";
import logoImg from "../../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  

  async function handleSignup(e: FormEvent) {
    e.preventDefault();
    
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos')
      
    }
    
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
          <Input placeholder="Digite seu Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Digite seu email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Sua senha" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
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
