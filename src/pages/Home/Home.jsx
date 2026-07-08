import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.principal}>
            <div>
                <h1 id="feliz">Feliz Aniversário!</h1>
            </div>
            <div className={styles.nvs}>
                <h1 id="te-amo">Te amo incondicionalmente!</h1>
                <h2>────୨ৎ────</h2>
            </div>
            <div className={styles.nvs2}>
                <Link to="/james">
                    <h1 id="hp">❾¾</h1>
                </Link>
            </div>
        </div>
    );
}

export default Home;