import { WorkFLowCard } from "./card";

const HowToGetThere = (props) => {
    const workData = props.data.AboutSection

    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg_blue_gradient py-5">
                    <div className="container">
                        <div className="col-md-12 heading">{workData.Title}</div>
                        <div className="row row_gap">
                            {workData.AboutOptions.map((p, i) => (
                                <div key={i} className="col-lg-3 col-md-6 mt-md-3">
                                    <WorkFLowCard content={p} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HowToGetThere;