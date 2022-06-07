import Button from "./button";
import CountryInput from "./countryInput/countryInput"

const DemoSection = (props) => {

    const BannerData = props.data

    return (
        <>
            <div className="container-fluid book_demo">
                <div className="container">
                    <div className="row row-xs">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="sub_title my-4">
                                {BannerData.DemoSection.LeadCaptureForm.Title}
                            </div>
                            <div className="sub_tex font_18 col-xl-6">
                                {BannerData.DemoSection.LeadCaptureForm.Description}
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 col-8 pt-3">
                                    <input type="text" className="form-control input_font" style={{ lineHeight: 2.4 }} placeholder={BannerData.DemoSection.LeadCaptureForm.VisibleInputs.Email.Placeholder} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-1 col-lg-1 col-md-2 col-4 pt-3">
                                    <CountryInput />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-8 pt-3">
                                    <input type="text" className="form-control input_font" style={{ lineHeight: 2.4 }} placeholder={BannerData.DemoSection.LeadCaptureForm.VisibleInputs.Mobile.Placeholder} />
                                </div>
                                <div className="col-md-4">
                                    <Button className="request_demo_btn" value={BannerData.DemoSection.LeadCaptureForm.Button.Text} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemoSection;