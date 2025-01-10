import { Link } from 'react-router-dom';

const WieTeam = () => {
  const wieTeam = [
    {
      id: 1,
      name: 'Aqsa Noor',
      designation: 'President WIE',
      image: '/images/wie-team/w1.jpeg',
    },
    {
      id: 2,
      name: 'Sara Khan',
      designation: 'Vice President WIE',
      image: '/images/wie-team/w2.jpeg',
    },
    {
      id: 3,
      name: 'Ayesha Khan',
      designation: 'Event Coordinator',
      image: '/images/wie-team/w3.jpeg',
    },
    {
      id: 4,
      name: 'Sana Khan',
      designation: 'Social Media Manager',
      image: '/images/wie-team/w4.jpeg',
    },
    {
      id: 5,
      name: 'Zainab Ali',
      designation: 'Web Developer',
      image: '/images/wie-team/w5.jpeg',
    },
    {
      id: 6,
      name: 'Sana Ali',
      designation: 'Graphic Designer',
      image: '/images/wie-team/w6.jpeg',
    },
    {
      id: 7,
      name: 'Ayesha Ali',
      designation: 'Content Writer',
      image: '/images/wie-team/w7.jpeg',
    },
    {
      id: 8,
      name: 'Sara Ali',
      designation: 'Event Coordinator',
      image: '/images/wie-team/w8.jpeg',
    },
    {
      id: 9,
      name: 'Aqsa Ali',
      designation: 'Event Coordinator',
      image: '/images/wie-team/w9.jpeg',
    },
    {
      id: 10,
      name: 'Sana Noor',
      designation: 'Event Coordinator',
      image: '/images/wie-team/w10.jpeg',
    },
  ];

  return (
    <>
      <main className="wieteam_section_wrapper py-5">
        <div className="container">
          <div className="back-links">
            <Link to="/">Back to Home</Link>
            <Link to="/wie">Back to WIE</Link>
          </div>

          <section className="wieteam_section">
            <h2>Meet the Women in Engineering (WIE) Team</h2>
            <p>
              This team is dedicated to promoting and supporting women
              engineers. Here are some of the amazing members who are working
              hard to make this initiative a success.
            </p>

            <div className="team-details">
              <h3>About the Team</h3>
              <p>
                The WIE team is committed to fostering an inclusive and
                empowering environment for women in the field of engineering. By
                hosting events, networking sessions, and providing mentorship,
                we aim to create a platform where women can thrive and excel.
              </p>

              <div className="row flex-column">
                {wieTeam?.map((team) => (
                  <div key={team.id} className="col-md-4 mx-auto mb-3">
                    <img
                      src={team.image}
                      alt="WIE Team Group Photo"
                      className="img-fluid w-100"
                      loading="lazy"
                    />
                    <p className="fw-bold">{team.name}</p>
                    <p>{team.designation}</p>
                  </div>
                ))}
              </div>

              <div className="col-md-8 mx-auto">
                <img
                  src="/images/wie-team/w11.jpeg"
                  className="w-100 img-fluid"
                  alt="WIE Team Group Photo"
                  loading="lazy"
                />
                <p className="fw-bold">Team WIE</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default WieTeam;
