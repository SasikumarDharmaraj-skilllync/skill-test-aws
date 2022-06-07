import Link from "next/link";

const Footer = (props) => {

    const footerData = props.data.FooterSection

    return (
        <>
            {footerData ?
                <>
                    <div className="container-fluid bg-black pb-5">
                        <div className="container foot_font_color">
                            <div className="row">
                                <div className="col-xl-6 col-lg-5 col-md-12 mt-5">
                                    <img src={footerData.SkillLync.Image} alt="" className="img-fluid" />
                                    <div className="font_16 py-4">
                                        {footerData.SkillLync.ShortDescription}
                                    </div>
                                    <div className="row my-4">
                                        {Object.entries(footerData.SkillLync.SocialNetworks).map(([key, data]) => (
                                            <div className="col-auto icon_footer" key={key}><img src={data.Icon} alt="" /></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-6 mt-5">
                                    <div className="foot_head">{footerData.OurCompany.Title}</div>
                                    {footerData.OurCompany.List.map((p, i) => (
                                        <div key={i} className="font_16 mt-1">{p.Text}</div>
                                    ))}
                                </div>
                                <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-10 link_tag" dangerouslySetInnerHTML={{ __html: footerData.Contact.Address }} />
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-1"></div>
                                        <div className="col-10 link_tag">{footerData.Contact.Mobile}</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-1"></div>
                                        {footerData.Contact.Email.map((p, i) => (
                                            <div className="col-10 link_tag" key={i}>{p.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-5 hr-clr" />
                            <div className="row">
                                {footerData.Options.map((j, i) => (
                                    <div className="col-lg-4 col-md-6" key={i}>
                                        <div className="foot_head mt-5 mb-3 plus_clr">{j.Title}</div>
                                        {j.List.map((q, i) => (
                                            <div key={i} className="mt-1"><Link href="/" className="link_tag">{q.Title}</Link></div>
                                        ))}
                                    </div>
                                ))}

                                <div className="offset-lg-5 col-lg-3 offset-md-9 col-md-3 pt-4 pb-3 my-lg-5 ">
                                    <div className="d-flex flex-column">
                                        <button type="button" className="btn btn-outline-light mb-3 font_16"><span className="col-1"></span> {footerData.Button.Text}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy_right p-3 ">
                        <span>{footerData.Copyright.Text}</span>
                    </div>
                </> : null}
        </>
    )
}

export default Footer;