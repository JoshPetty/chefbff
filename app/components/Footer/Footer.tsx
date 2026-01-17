import Image from "next/image";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-8">
        <div className="footer-content">
          <div className="logo">
            <Image 
              src="/logo.jpg" 
              alt="ChefBFF" 
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span>ChefBFF</span>
          </div>
          <p>© 2026 ChefBFF. All rights reserved.</p>
        </div>
      </div>
    </Container>
  );
}