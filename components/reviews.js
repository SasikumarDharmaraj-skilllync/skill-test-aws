import { ReviewCards } from "./card";

const Review = (props) => {
    const reviewData = props.data.RatingsReviewsSection
    return (
        <>
            <div className={props.className === "bg_green_gradient" ? "container-fluid bg_green_gradient py-5" : null}>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-5 align_base">
                            <div>
                                <div className="text_head_clr_review review_heading heading font_color_heaad">
                                    <span>
                                        {reviewData.Title}
                                    </span>
                                </div>
                                <div className="text my-5">
                                    {reviewData.Description}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="review_card_wrapper">
                                {reviewData.List.map((p, i) => (
                                    <ReviewCards key={i} content={p} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
