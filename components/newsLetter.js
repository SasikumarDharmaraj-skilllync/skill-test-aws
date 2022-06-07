import Button from "./button";
import { NewsLetterCard } from "./card";


const NewsLetter = (props) => {
    const newsData = props.data.NewsSection
    return (
        <>
            <div className="container mt-5">
                <div className="news_skill font_color">
                    {newsData.Title}
                </div>
                <div className="heading font_color text_left">
                    <span className="media_text">{newsData.Description}</span>
                </div>
                <div className="heading">
                    <div className="news_card_wrapper">
                        {newsData.List.map((p, i) => (
                            <div className="news_cards_items" key={i}>
                                <NewsLetterCard content={p} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-5 col-xs-12 offset-xl-9 offset-lg-8 my-5">
                    <Button className="See_More_btn" value={newsData.Button.Text} />
                </div>
            </div>

        </>
    );
}

export default NewsLetter;