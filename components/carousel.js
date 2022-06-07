import Carousel from "react-multi-carousel";
import { PlacementCards, SimilarCourseCard } from "./card";
import { IoIosArrowDropright } from "react-icons/io"
import { IoIosArrowDropleft } from "react-icons/io"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 80,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 40,
    },
};

const responsiveness = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 0,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 40,
    },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselCards = (props, { deviceType }) => {
    //carousel Items cards in variable
    const data = props.cardData;
    const carouselItems = data.map((data, i) => {
        return (
            <div key={i}
                className={props.cardName === "PlacementCard" ? "carousel_items_placements" : "carousel_items"}
            >
                {
                    // props.cardName === "ReviewCard" ? (
                    //   <ReviewCards content={data} />
                    // ) :
                    props.cardName === "SimilarCourseCard"
                        ?
                        (
                            <SimilarCourseCard content={data} />
                        )
                        :
                        props.cardName === "PlacementCard"
                            ?
                            (
                                <PlacementCards content={data} />
                            )
                            :
                            null
                }
            </div>
        );
    });
    //custom Buttons for carousel
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: {
            // currentSlide
        } } = rest;
        return (
            <div className="carousel-button-group">
                <IoIosArrowDropleft className="arrow" onClick={() => previous()} />
                <IoIosArrowDropright className="arrow" onClick={() => next()} />
            </div>
        );
    };

    //custom Dots for carousel
    const CustomDot = ({ onClick, ...rest }) => {
        const {
            // onMove,
            // index,
            active,
            carouselState: { currentSlide, deviceType },
        } = rest;
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        return (
            <li
                className={active ? "carousel_dots active" : "carousel_dots inactive"}
                onClick={(e) => {
                    onClick();
                    e.preventDefault();
                }}
            ></li>
        );
    };
    return (
        <div>
            <Carousel
                partialVisible
                deviceType={deviceType}
                itemClass="image-item"
                responsive={props.cardName === "SimilarCourseCard" ? responsiveness : responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={true}
                renderDotsOutside={props.cardName === "PlacementCard" || "SimilarCourseCard" ? false : true}
                customDot={props.cardName === "PlacementCard" || "SimilarCourseCard" ? false : <CustomDot />}
                draggable
                infinite
                autoPlay={true}
                autoPlaySpeed={4000}
                customButtonGroup={props.cardName === "PlacementCard" || "SimilarCourseCard" ? <ButtonGroup /> : null}
                arrows={false}
            >
                {carouselItems}
            </Carousel>
        </div>
    );
};




