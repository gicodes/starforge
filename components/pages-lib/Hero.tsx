import styles from "@styles/style";

const Hero: React.FC = () => {
  return (
    <div>
      <h2 className="lg:text-[50px] md:text-[40px] flex-1 font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100px]">
        Sports and Athlete Management on the grand stages
      </h2>
    </div>
  );
};

export const IndexHero: React.FC = () => {
  return (
    <div>
      <h2
        className={`index-hero lg:text-[50px] ss:text-[32px] text-[30px] ss:leading-[100px] font-semibold`}
      >
        <span className="text-warn">Discover</span>{" "}
        <span className="text-primary">the StarForge</span>{" "}
        <span className="text-warn">Dream</span>
      </h2>
    </div>
  );
};

export default Hero;
