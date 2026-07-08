import { Link } from "react-router-dom";
import styles from "./Sobre.module.scss";

function Sobre() {
    return (
        <div className={styles.principal}>
            <div id="te-amo">
                <Link to="/">
                    <h1>Te amo como James amou Lílian</h1>
                </Link>

                <Link to="/">
                    <h2 style={{ color: "rgb(255, 255, 255)" }}>𓅓♡</h2>
                </Link>
            </div>
        </div>
    );
}

export default Sobre;