const About = () => {
  return (
    <>
      <section className="about_section" id="about">
        <h3>About Us</h3>
        <p>
          The ASME UET Peshawar Chapter is a proud part of ASME International, a
          global network of engineers committed to innovation and excellence.
          Our chapter empowers students through skill-building, networking, and
          dynamic events. The highlight of our activities is EFX, an exciting
          platform for competitions, workshops, and collaboration, fostering
          creativity and engineering brilliance.
        </p>

        <section id="advisors" className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2 className="text-center">Our Advisor</h2>
                <h3>Dr. Muhammad Alam Zaib Khan</h3>
                <p>
                  Dr. Muhammad Alam Zaib Khan is a distinguished Assistant
                  Professor in the Department of Mechanical Engineering at UET
                  Peshawar. He holds a PhD from Loughborough University and a
                  BSc in Mechanical Engineering from UET Peshawar. Since 2014,
                  Dr. Khan has served as the esteemed advisor for the ASME UET
                  Peshawar Chapter, where his guidance and leadership have been
                  pivotal in inspiring students and advancing engineering
                  excellence.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src="/images/img/advisor.png"
                  alt="Advisor"
                  className="img-fluid rounded"
                  loading="lazy"
                />
              </div>
            </div>
            <h4>
              <b>Setting the Standards</b>
            </h4>
            <p>
              <i>
                ASME UET Peshawar Chapter – Pioneering Excellence in Engineering
              </i>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
