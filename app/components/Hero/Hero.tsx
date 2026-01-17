import Link from "next/link";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <div className="hero-content">
        <h1>
          Make Food<br />
          Make Friends
        </h1>
        <p>
          A Community of Home Chefs
        </p>
        <div className="cta-buttons">
          <Link href="/recipes" className="primary-button">
            Browse Recipes
          </Link>
          <Link href="/recipes/new" className="secondary-button">
            Share Yours
          </Link>
        </div>
      </div>
    </Container>
  );
}