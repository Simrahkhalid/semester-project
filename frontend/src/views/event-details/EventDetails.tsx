import { useParams, Link } from "react-router-dom"

const EventDetails = () => {
    const { eventName } = useParams()
    return (
        <>
            <div className="event-details-wrapper">
                <div className="container">
                    <div className="back-links">
                        <Link to="/events">Back to Events</Link>
                    </div>

                    <section className="event-details-section">
                        <h3>{eventName}</h3>
                        <p>An Advanced Clean Energy Summit was organized by the American Society of Mechanical Engineers UET Peshawar Student Section, on the 9th and 10th of January 2023. CEO KPEZDMC as a chief guest & HOD Energy & Power as a guest speaker were invited to the occasion. Different other speakers from NUST, UET Peshawar, UET Taxila, and GIKI; also engaged with students and shared their valuable thoughts on Energy. The event mainly focused on the Role of Engineers in the Economic growth of Pakistan and the use of Energy.This event was Sponsored by our Diamond Sponsor GreenWendEnergy, Platinum Sponsor ARAR Groups and our Food Sponsor Cheezious.The second Session of this event started with tilawat which was followed by Dr. Muhammad Nouman (USPCAS-E UET Peshawar), Dr. Zohaib (USPCAS-E UET Peshawar), and Dr. Attique ur Rehman (GIKI). Mr. Amir Marwat from KPEZDMC talked about Job opportunities in Pakistan, the formation of Synthetic Gas, the Conversion of Waste Energy into Electrical Energy, the Solarization of the Economic Zone, and Green Hydrogen Projects. The Closing Ceremony started with the speech of Muhammad Osama (President ASME UET Peshawar), followed by Dr. Iftikhar Hussain (Vice Chancellor UET Peshawar), while the ending was followed by the CEO of KPEZDMC Mr. Javed Iqbal Khattak who shared his valuable thoughts about Economical Development of Pakistan, Effective Use of Economic Zones of Pakistan, Role of Engineers in Development of Pakistan. The last phase of this came to an end with Award distribution and with a group photo of the ASME family, which concluded this event as a successful step towards Advance Clean Energy</p>

                        <div className="image-gallery">
                            <img src="/images/events/1.jpeg" alt="ASME ACES 2023" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default EventDetails