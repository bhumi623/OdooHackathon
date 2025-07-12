import { Link } from "react-router-dom";
import styles from "./Askbutton.module.css"
const Askbutton = () => {
    return(
        <div>
          <Link to="/create" className={styles.askBtn}>
            Ask New Question
          </Link>
        </div>
    )
}
export default Askbutton;