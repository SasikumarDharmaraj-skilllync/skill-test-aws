import { BannerCard } from "./card"

const HomeBanner = (props) => {

    const BannerData = props.data

    return (
        <>
            <div className="container">
                <div className="row row-xs top_space">
                    <div className="col-lg-6">
                        <div className="title" dangerouslySetInnerHTML={{ __html: BannerData.BannerSection.Title }} />
                        <div className="text margin_30 font_18 col-xl-8">
                            {BannerData.BannerSection.Description}
                        </div>
                        <div className="container_banner_card">
                            <div className="banner_cards_grid_wrapper">
                                {BannerData.BannerSection.Lists.map((p, i) => (
                                    <BannerCard key={i} content={p} type="home" icon="GiGraduateCap" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 d-sm-block d-none">
                        <div className="banner_img_container">
                            <img src={BannerData.BannerSection.VideoSection.Thumbnail} alt="" className="img-fluid img_banner" />
                            <div className="img_des_box">
                                <div className="img_under_title">{BannerData.BannerSection.VideoSection.Title}</div>
                                <div className="img_under_text">{BannerData.BannerSection.VideoSection.Description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;