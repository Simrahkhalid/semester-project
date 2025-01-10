import { Link } from 'react-router-dom';

const WIE = () => {
  return (
    <>
      <section className="wie-section" id="wie">
        <h3>Women in Engineering (WIE)</h3>
        <p>
          We are proud to support and promote the participation of women in
          engineering through our Women in Engineering (WIE) initiative. This
          section provides a platform for women engineers to network, learn, and
          grow together. It is dedicated to creating a positive environment
          where women can excel and become leaders in the field.
        </p>
        <img src="/images/img/wie.jpeg" alt="ASME Event" loading="lazy" />
        <div className="wiebutton">
          <Link to="/wie/team">
            <button>WIE Team</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default WIE;
