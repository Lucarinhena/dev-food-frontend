import Head from "next/head";
import Image from "next/image";
import logoImg from "../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevFood - Faça seu login!</title>
      </Head>
      <div>
        <Image src={logoImg} alt="Logo img" />
        <div className="styles.login">
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
