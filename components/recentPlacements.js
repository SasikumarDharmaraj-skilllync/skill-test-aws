import { CarouselCards } from "./carousel";

const RecentPlacements = (props) => {
    const placeData = props.data.RecentPlacementsSection;

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-11">
                        <div className="headings">{placeData.Title}</div>
                    </div>
                    <div>
                        <div className="carousel_container">
                            <div className="white_gradient_container"></div>
                            <CarouselCards cardData={placeData.Cards} cardName="PlacementCard" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentPlacements;