import { Link } from "react-router-dom";
import "../fonts/404.css";

export default function Page404() {
  return (
    <div>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="message">Page not found</div>
      <div class="link-container">
        <Link class="more-link" to="/">
          Anasayfaya Dön{" "}
        </Link>
      </div>
    </div>
  );
}
