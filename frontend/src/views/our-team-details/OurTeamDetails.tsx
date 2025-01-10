import { useParams, Link } from "react-router-dom"
const OurTeamDetails = () => {
    const { tenure } = useParams()

    return (
        <>
            <section className="team-details-section">
                <div className="container">
                    <p className="text-end">
                        <Link className="btn btn-primary rounded-pill" to="/our-team">Back To Teams</Link>
                    </p>
                    <h2 className="text-center">Team {tenure}</h2>
                    <div className="team-grid">
                        <div>
                            <img src="/images/our-teams/usamajadoon.png" alt="Member 1" loading="lazy" />
                            <p>Osama Hamayun Jadoon</p>
                            <p>President</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeamDetails