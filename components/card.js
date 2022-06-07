import Link from 'next/link';
import { useState } from 'react';
import ReactStars from 'react-stars';
import Button from './button';

export function BannerCard(props) {
    const data = props.content;
    return (
        <div className="border_card">
            <div className="card_inner_wrapper_banner">
                <span className="d-flex align-items-center icon_banner_card">
                    <img src={data.Icon} alt="" type="login" />
                    <span className="banner_card_text text-start mx-2" dangerouslySetInnerHTML={{ __html: data.Text }} />
                </span>
            </div>
        </div>
    );
}
export function InstructorCard(props) {
    const data = props.content;
    return (
        <div className="border_card">
            <div className="card_inner_wrapper_banner">
                <div className='row'>
                    <span className="d-flex icon_banner_card">
                        <img src={data.Image} alt="" style={{ height: "26px", width: "26px" }} className="m-2 mt-3" />
                        <span>
                            <p className="text-start mx-2 my-3" style={{ fontSize: "14px", fontWeight: "bold" }} dangerouslySetInnerHTML={{ __html: data.Title }} />
                            {data.Description ? <p className="text-start mx-2" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: data.Description }} /> :
                                <>
                                    {data.List.map((k, i) => (
                                        <li key={i} className="text-start mx-2" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: k }} />
                                    ))}
                                </>}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export function CourseCard(props) {
    var content = props.content;
    return (
        <>
            <div className="card_border">
                <div className="image_card_course">
                    <img className="image_title" src={content.Image} alt="Title " />
                </div>
                <div className="program_title" >
                    <Link href={content.InternalLink}>{content.Title}</Link>
                </div>
                <div className="rating_starCards">
                    {content.Rating ? (
                        <ReactStars
                            value={content.Rating.Value}
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                        />
                    ) : <p style={{
                        background: "#ca8529",
                        width: "fit-content"
                    }}>{content.Label}</p>
                    }
                </div>
                <div className="details_container mt-3">
                    <div>
                        {content.List.map((k) => (
                            <div key={k.Title} className="program_icon mt-2">
                                <span><img src={k.Icon} className="mx-2" alt='' />{k.Title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="element_Button">
                    <button className="request_demo_btn my-3"><Link href={content.Button.InternalLink}>{content.Button.Text}</Link></button>
                </div>
            </div>
        </>
    );
}

export function WorkFLowCard(props) {
    var content = props.content;
    return (
        <div className="card_inner_wrapper p-3">
            <img src={content.Image} alt='' />
            <div className="card_content_container">
                <div className="workflow_card_title">{content.Title}</div>
                <div className="workflow_card_text">{content.Description}</div>
            </div>
        </div>
    );
}

export function PlacementCards(props) {
    const placementCardData = props.content;
    return (
        <>
            <div className="card_border margin-left">
                <div className="placement_card_profile">
                    <div>
                        <img src={placementCardData.CardHeader.ProfileImage} className="placement_profile_image" alt="" />
                    </div>
                    <div className="placement_profile_detail">
                        <div className="placement_profile_detail_1st">
                            <div className="placement_head_txt_clr">{placementCardData.CardHeader.Name}</div>
                            <div>
                                <img src={placementCardData.CardHeader.CompanyLogo} className="placement_company_image" alt="" />
                            </div>
                        </div>
                        <div className="placement_card_designation">{placementCardData.CardHeader.Position}</div>
                    </div>
                </div>
                <hr />
                <div className="placement_card_body">
                    <div className="placement_head_txt_clr">{placementCardData.CardBody.Title}</div>
                    <div className="placement_head_desc_clr">
                        {placementCardData.CardBody.Description}
                    </div>
                </div>
                <div className="placement_card_fotter d-flex  text-white px-3 py-2">
                    <div className="d-flex align-items-center placement_card_read_more">
                        {placementCardData.CardFooter.Text}
                    </div>
                </div>
            </div>
        </>
    );
}

export function ReviewCards(props) {
    const reviewcCardData = props.content;
    return (
        <>
            <div className="card_border p-3">
                <div className="placement_card_profile p-0">
                    <div>
                        <img src={reviewcCardData.StudentPhoto} className="placement_profile_image" alt="" />
                    </div>
                    <div className="placement_profile_detail">
                        <div className="placement_profile_detail_1st">
                            <div className="placement_head_txt_clr">
                                <Link href={reviewcCardData.ProfileLink}>
                                    {reviewcCardData.StudentName}
                                </Link>
                            </div>
                        </div>
                        <div className="review_card_course">
                            <span dangerouslySetInnerHTML={{ __html: reviewcCardData.CourseLabel }} />
                            <Link href={reviewcCardData.CourseLink}>{reviewcCardData.CourseName}</Link>
                        </div>
                    </div>
                </div>
                <div className="review_card_content">
                    {reviewcCardData.Description}
                </div>
                <div className="review_social_container">
                    <div className="review_social">
                        <div className="review_social_small">
                            <Link href={reviewcCardData.Footer.InternalLink}>{reviewcCardData.Footer.Text}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export function NewsLetterCard(props) {
    const newsLetterCardData = props.content
    return (
        <>
            <div className="card_border_newsCards p-4">
                <div className="newscard_container">
                    <div className="news_heading">
                        {newsLetterCardData.Title}
                    </div>
                    <div className="news_description">
                        {newsLetterCardData.Description}
                    </div>
                    <div className="news_media_logo">
                        <img className="img-fluid" src={newsLetterCardData.Thumbnail} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export function SimilarCourseCard(props) {
    var content = props.content;
    return (
        <>
            <div className="card_border" style={{ padding: "5px", minHeight: "150px" }}>
                <div className='d-flex align-items-center'>
                    <div>
                        <img style={{ height: "85px", width: "75px", borderRadius: "5px", margin: "5px" }} src={content.Image ? content.Image : content.Thumbnail} alt=" " />
                    </div>
                    <div>
                        <div className="program_title" style={{ fontSize: "14px", margin: "5px" }}>
                            <Link href={content.InternalLink}>{content.Title}</Link>
                        </div>
                        <ReactStars
                            value={4.8}
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                        />
                        <p style={{ fontSize: "12px", margin: "15px 0 0 5px" }}>{content.List[0] ? (content.List[0].Title) : (content.List.Title)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export function CourseFeesCard(props) {
    var content = props.content;
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
        setShow(!show);
    }
    return (
        <>
            <div
                className={
                    content.PlanName === "Premium"
                        ? "pro_plan crc_fee_border_card fee_card d-flex-column"
                        : "crc_fee_border_card fee_card d-flex-column"
                }
            >
                {content.PlanName === "Premium" ? <div className="ribbon">{content.Ribbon.Text}</div> : null}
                <div className="fee_plan">{content.PlanName}</div>
                <div
                    className={
                        content.PlanName === "Premium"
                            ? "green_txt color_blue fee_duration"
                            : "color_blue fee_duration"
                    }
                    style={{ fontSize: "16px", fontWeight: 600 }}
                >
                    {content.Description}
                </div>
                <div className="fee_amt">{content.Price.Currency} {content.Price.Amount}</div>
                <div className="fee_duration">{content.Price.Text} </div>
                <div className="margin_button text-left">
                    <Button
                        className="enroll_button_pro"
                        value={content.Button[0].Text}
                    />
                </div>
                <div className="margin_button text-left">
                    <button
                        className="button"
                        onClick={handleClick}
                    >
                        {show ? <> {content.Button[1].SubText}</> : <> {content.Button[1].Text}</>}
                    </button>
                </div>
                {content.Features.map((p, i) => (
                    <div
                        className={
                            props.type === "Pro" && p === "Email Support : Available "
                                ? "fee_description yellow_txt"
                                : props.type === "Premium" &&
                                    p === "Access Duration : 9 Months "
                                    ? "fee_description green_txt"
                                    : "fee_description"
                        }
                        key={i}
                    >
                        {show ? <> {p.Label} : {p.Value} </> : null}

                    </div>
                ))}
            </div>
        </>
    );
}