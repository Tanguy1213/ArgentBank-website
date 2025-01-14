import React from "react";
import "./Home.scss";
import iconChat from "../../assets/img/icon-chat.webp";
import iconMoney from "../../assets/img/icon-money.webp";
import iconSecurity from "../../assets/img/icon-security.webp";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Feature from "../../components/Feature/Feature";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            imgSrc={iconChat}
            title="You are our #1 priority"
            alt="Chat icon"
            desc="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            imgSrc={iconMoney}
            title="More savings means higher rates"
            alt="Money icon"
            desc="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            imgSrc={iconSecurity}
            title="Security you can trust"
            alt="Security icon"
            desc="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
