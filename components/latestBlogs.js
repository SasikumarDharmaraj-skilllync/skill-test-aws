import Button from "./button";
import Blogs from "./blogs";

const LatestBlogs = (props) => {

    const blogData = props.data.BlogsSection

    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg_blue_gradient" >
                    <div className="container">
                        <div className="heading text_left">
                            <span className="mt-5"> {blogData.Title} </span>
                        </div>
                        <div className="row">
                            <Blogs data={blogData.List} />
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-5 col-xs-12 offset-xl-9 offset-lg-8 mt-5">
                            <Button className="See_More_btn my-5" value={blogData.Button.Text} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LatestBlogs;