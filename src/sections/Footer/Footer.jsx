import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Francisco Pazos <br />
        Hecho con{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={styles.red}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.605 9.028L6.203 4.616a1.53 1.53 0 0 1 .012-2.162a1.523 1.523 0 0 1 2.157-.012l7.786 7.725c2.658 2.664 4.19 6.156 1.223 9.764l-.316.317a5.96 5.96 0 0 1-8.44 0l-3.188-3.15c-.593-.593-.58-1.568.027-2.177c.575-.577 1.48-.618 2.077-.115m3.064-5.778l2.51 2.514m-2.51-2.514c-.593-.594-1.59-.58-2.2.031c-.611.612-.625 1.589-.033 2.182l.728.73m0 0l1.784 1.787M9.1 11.971c-.592-.594-1.542-.566-2.152.045s-.625 1.588-.032 2.182l.625.608m0 0l1.13 1.1m-1.13-1.1q.05.042.095.088m4.5-8.717c.168-1.537 1.988-3.13 4.26-2.039c.216.104.387.3.39.54c.002.386-.167.863-.711 1.18c-.778.452-2.051 2.18-.351 3.885"
            color="currentColor"
          />
        </svg>
        .
      </p>
    </section>
  );
}

export default Footer;
