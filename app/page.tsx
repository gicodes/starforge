"use client";

import styles from "@/styles/style";
import { Footer, Navbar } from "@/components";
import { IndexHero } from "@components/pages-lib/Hero";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <header
          className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </header>

        <IndexHero />

        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${"/assets/ucheKanuStarForge.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
