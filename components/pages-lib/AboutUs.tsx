"use client";
import { useState } from "react";
import styles, { layout } from "@/styles/style";

const AboutUs: React.FC = () => {
  const [point, setPoint] = useState({
    athlete: false,
    events: false,
    brand: false,
    club: false,
    sm: false,
  });

  const togglePoint = (id: string) => {
    setPoint((prevPoint) => ({
      ...prevPoint,
      [id]: !prevPoint[id],
    }));
  };

  return (
    <section id="about-us">
      <p className={`${styles.paragraph}`}>
        At StarForge, we redefine Athlete management by providing comprehensive
        solutions that go beyond traditional sporting activities.
        <span className="newline">
          Our mission is to empower athletes to excel in every aspect of their
          career.
        </span>
        Through our strategic approach, we seamlessly integrate lifestyle
        management, brand development, club partnerships, social media
        management and off-field sporting events to elevate athletes to new
        heights of success.
      </p>
      <div className={`${layout.sectionInfo} ${styles.paddingY}`}>
        <div className={`min-w100`}>
          <div id="athlete-management">
            <button
              onClick={() => togglePoint("athlete")}
              className="bg-blue-gradient btn"
            >
              Athlete Lifestyle
            </button>
            {point.athlete && (
              <div className={`text-white p-3`}>
                We understand that being an athlete is more than just a
                profession, it is a way of life. That's why we offer
                personalized lifestyle management services tailored to meet the
                unique needs and aspirations of each athlete. From coordinating
                travel arrangements to arranging accommodations, managing
                finances, and fostering personal growth opportunities, we ensure
                that our athletes can focus on their craft while we handle the
                rest.
              </div>
            )}
          </div>
          <div id="brand-management">
            <button
              onClick={() => togglePoint("brand")}
              className="bg-blue-gradient btn"
            >
              Sponsorship and Branding
            </button>
            {point.brand && (
              <div className={`text-white p-3 bg-primary-gradient`}>
                In today's competitive sporting space, building a strong
                personal brand is essential for athletes to stand out and secure
                lucrative opportunities. At StarForge, we work closely with our
                athletes to develop and cultivate their personal brand identity.
                Through strategic branding initiatives, content creation, and
                endorsement deals, we help athletes connect with their fans on a
                deeper level and maximize their earning potential both on and
                off the field.
              </div>
            )}
          </div>
          <div id="club-management">
            <button
              onClick={() => togglePoint("club")}
              className="bg-blue-gradient btn"
            >
              Club Management
            </button>
            {point.club && (
              <div className={`text-white p-3 bg-primary-gradient`}>
                Athletes are the assets of sports clubs, and cultivating strong
                partnerships between athletes and clubs is essential for mutual
                success. At StarForge, we forge strategic alliances between our
                athletes and clubs, fostering a collaborative environment where
                both parties can thrive. Whether it's negotiating contracts,
                facilitating transfers, or coordinating marketing initiatives,
                we ensure that our athletes and clubs are positioned for success
                both on and off the field.
              </div>
            )}
          </div>
          <div id="events-management">
            <button
              onClick={() => togglePoint("events")}
              className="bg-blue-gradient btn"
            >
              Sporting Events
            </button>
            {point.events && (
              <div className={`text-white p-3 bg-primary-gradient`}>
                At StarForge, we leverage our expertise and industry connections
                to maximize athletes' participation in various sporting events,
                ensuring they seize every opportunity to showcase their talent
                on a global stage. Whether it's securing invitations to
                prestigious tournaments, coordinating logistics, or maximizing
                exposure through events partnerships. With our unwavering
                support, athletes can be part of sporting events, knowing that
                StarForge is dedicated to fueling their success every step of
                the way.
              </div>
            )}
            <div id="social-media-management">
              <button
                onClick={() => togglePoint("sm")}
                className="bg-blue-gradient btn"
              >
                Social Media
              </button>
              {point.sm && (
                <div className={`text-white p-3 bg-primary-gradient`}>
                  Social Media Enhancement: Social media has revolutionized the
                  way athletes engage with their fans and build their personal
                  brands. At StarForge, we recognize the power of social media
                  as a tool for connection and influence. Our team of experts
                  leverages cutting-edge strategies and industry insights to
                  optimize our athletes' social media presence, allowing them to
                  authentically connect with fans, attract sponsors, and expand
                  their reach to new audiences.
                </div>
              )}
            </div>
          </div>
        </div>
        <p className={`${styles.paragraph} ${styles.paddingY}`}>
          In essence, StarForge is more than just an athlete management team; we
          are a trusted partner dedicated to helping athletes realize their full
          potential and achieve greatness in every aspect of their lives. With
          our unparalleled expertise, unwavering dedication, and commitment to
          excellence, we empower athletes to reach for the stars and beyond.
          <span className="newline mt-2">
            {" "}
            Welcome to the future of athlete management. Welcome to{" "}
            <span className="text-warn">StarForge</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
