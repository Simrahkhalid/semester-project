import { Link } from "react-router-dom"


const Events = () => {
    return (
        <>
            <section className="events-section" id="events">
                <h3>Our Events</h3>
                <p>We organize workshops, seminars, and competitions to enhance technical skills and leadership capabilities.</p>

                <div className="event-buttons">
                    <Link to="/events/ASME ACES 2023" className="event-btn">ASME ACES 2023</Link>
                    <Link to="/events/EFX 2023" className="event-btn">EFX 2023</Link>
                    <Link to="/events/EFX 2024" className="event-btn">EFX 2024</Link>
                    <Link to="/events/ASME PEFAA 2024" className="event-btn">ASME PEFAA 2024</Link>
                    <Link to="/events/Charity Auction" className="event-btn">Charity Auction</Link>
                </div>
                <img src="/images/events/eventpic.jpeg" alt="ASME Event" className="img-fluid" width={750} height={750} />
            </section>
        </>
    )
}

export default Events