import Link from "next/link";
import { useEffect, useState } from "react";
import isLessThan10 from "../utils/isLessThan10";

export function Footer() {
  // SSR não necessário
  const [dat, setDat] = useState("");
  useEffect(() => {
    async function exe() {
      fetch("https://api.github.com/repos/Kaolhou/kaolhou").then((prom) => {
        prom.json().then((data) => {
          setDat(data.pushed_at);
        });
      });
    }
    exe();
  }, []);

  let data = new Date(dat);
  let day = data.getDate();
  let month = data.getMonth();
  let year = data.getFullYear();
  if (dat) {
    return (
      <footer className="text-center py-6">
        <p>
          Feito com ♥ por{" "}
          <Link href="/about" className="und">
            André Mendes
          </Link>
        </p>
        <p>
          Atualizado em: {`${isLessThan10(day)}/${isLessThan10(month)}/${year}`}
        </p>
      </footer>
    );
  } else {
    return (
      <footer className="text-center py-6">
        <p>
          Feito com ♥ por{" "}
          <Link href="/about" className="und">
            André Mendes
          </Link>
        </p>
        <p>Atualizado em: DD/MM/YYYY</p>
      </footer>
    );
  }
}
