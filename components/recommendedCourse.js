import { CourseCard } from "./card";
import { useState } from "react";
import Button from "./button";

const RecommendedCourses = (props) => {
    const CourseData = props.data
    // console.log(CourseData)
    // const [visibleTab, setVisibleTab] = useState(CourseData.CategoryList.CategoryList[0].ID)
    const [visibleTab, setVisibleTab] = useState(0)

    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg_blue_gradient py-5">
                    <div className="container">
                        <h1 className="subTopic">{CourseData.Title}</h1>
                        <div className="row">
                            <div className="choose_text mb-3 font_18">{CourseData.CategoryList.Title}</div>
                            <div className="col-3">
                                {CourseData.CategoryList.CategoryList.map((p, index) => (
                                    <div
                                        className="nav_courses"
                                        key={index}
                                    >
                                        <button
                                            className="nav_stream"
                                            style={visibleTab === index ? { backgroundColor: "#21CDAA" } : null}
                                            onClick={() => setVisibleTab(index)}
                                        >
                                            {p.Name}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="col-9">
                                <div className="col-12">
                                    <div className="row d-md-flex">
                                        <div className="course_card_wraper">
                                            {CourseData.CategoryList.CategoryList.map((p, index) => (
                                                <>
                                                    {p.List.slice(0, 6).map((k, i) => (
                                                        <div className="course_card_items"
                                                            style={visibleTab === index ? { display: '' } : { display: 'none' }}
                                                            key={i}
                                                        >
                                                            <CourseCard content={k} />
                                                        </div>
                                                    ))}
                                                </>
                                            ))}
                                        </div>
                                        {CourseData.CategoryList.CategoryList[0].Button ?
                                            <div className="col">
                                                <Button className="See_More_btn" value={CourseData.CategoryList.CategoryList[0].Button.Text} />
                                            </div> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendedCourses;