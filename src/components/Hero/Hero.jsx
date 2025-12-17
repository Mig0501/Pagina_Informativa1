import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Página Informativa</h1>

        <p className={styles.subtitle}>
          Bienvenido/a. Aquí encontrarás información clara y organizada sobre el tema del proyecto.
        </p>

        {showMore && (
          <p className={styles.more}>
            Este contenido adicional aparece cuando presionas “Mostrar más”.
            Aquí puedes ampliar la explicación: objetivos, contexto, beneficios, etc.
          </p>
        )}

        <button
          className={styles.button}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>
    </section>
  );
}
