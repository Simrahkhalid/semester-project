import { Link } from "react-router-dom"

const OurTeam = () => {
    return (
        <>
            <section className="fade-in our-team-section">
                <h3>Meet Our Team</h3>

                <section>
                    <Link to="/our-team/2022-2023" className="team-section-btn" id="team-2022-23">Team 2022-23</Link>
                    <p>The ASME UET Peshawar Chapter had an outstanding team in the 2022-23 session, led by Osama Hamayun Jadoon as President. Under his leadership, ASME made history by bringing EFX UET to Pakistan for the first time. Along with Nimra Batool, President of the Women in Engineering (WIE) initiative, Osama played a key role in organizing EFX 2023 at UET Jalazoi. This event featured unique activities, including a Mushaira and the breathtaking release of Sky Lanterns, creating unforgettable memories for all attendees</p>
                    <img src="/images/our-teams/2022-23pic.jpeg" alt="Team 2022-23" />
                </section>

                <section>
                    <Link to="/our-team/2023-2024" className="team-section-btn">Team 2023-24</Link>
                    <p>The ASME UET Peshawar Chapter had an incredible team during the 2022-23 session, with Sayyam Ullah serving as President. Under his leadership, the chapter successfully organized EFX 2023 at UET Peshawar, the main campus, marking a significant achievement. Alongside Sawera Hameed, President of the Women in Engineering (WIE) initiative, Sayyam also organized a memorable trip to Swat and Malam Jabba, giving members the opportunity to explore new places and strengthen their bonds. These activities made the 2022-23 session truly unforgettable for the chapter.</p>
                    <img src="/images/our-teams/2023-24pic.jpeg" alt="Team 2023-24" />
                </section>

                <section>
                    <Link to="/our-team/2024-2025" className="team-section-btn">Team 2024-25</Link>
                    <p>The current tenure of the ASME UET Peshawar Chapter is being led by Zarmina Aziz Khan, the first female president of the chapter, alongside Aqsa Noor, President of the Women in Engineering (WIE) initiative. Under their leadership, the chapter has recently organized a Bonfire event for the executives, fostering team spirit and strengthening connections within the leadership group. As they look ahead, Zarmina and Aqsa are working tirelessly to make EFX 2025 a truly remarkable event, promising even more exciting opportunities and experiences for all members. Their dedication and vision are driving the chapter toward new heights of success and impact.</p>
                    <img src="/images/our-teams/2024-25pic.jpeg" alt="Team 2024-25" />
                </section>
            </section>
        </>
    )
}

export default OurTeam