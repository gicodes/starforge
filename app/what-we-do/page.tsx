import styles from "@/styles/style";
import { AboutUs, MeetTheTeam, Navbar, Stats, Hero } from "@components";

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-primary h-full overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>
      <div className={`${styles.paddingY}`}>
        <div className={`w-full ${styles.paddingX}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
          <MeetTheTeam />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
