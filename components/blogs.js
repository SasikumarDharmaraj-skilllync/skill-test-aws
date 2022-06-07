import { FaLongArrowAltRight } from "react-icons/fa"

const Blogs = (props) => {

    const blogContent = props.data

    return (
        <>
            {blogContent.slice(0, blogContent.length).map((p, i) => (
                <div key={i} className={i % 2 === 0 ? "col-lg-6 padding_right" : "col-lg-6 padding_left"}>
                    <div className="text_white">
                        {p.Title}
                    </div>
                    <div className="blog_desc_clr mt-3">
                        {p.Description}
                    </div>
                    <div className="text_white d-flex justify-content-end">
                        {p.Footer.Text} <FaLongArrowAltRight className="mt-1 mx-2" />
                    </div>
                    <hr className="hr-clr" />
                </div>
            ))}
        </>
    )
}

export default Blogs;