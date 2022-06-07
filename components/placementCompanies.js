import Link from 'next/link';

const PlacementsCompanies = (props) => {
    const placementData = (props.data.PlacementSection) || (props.data.CompaniesSection);

    return (
        <>
            <div className="container mb-5">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="title placement" dangerouslySetInnerHTML={{ __html: placementData.Title }} />
                        <div className="text mt-4 col-xl-8">
                            {placementData.Description}
                        </div>
                        <div className="col-md-6 mt-3">
                            <button className="See_More_btn"><Link href={placementData.Button.InternalLink}>{placementData.Button.Text}</Link></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {placementData.CompaniesList.map((p, i) => (
                                <div key={i} className="col-3">
                                    <img src={p.Logo} alt="Companies" className="img-fluid" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlacementsCompanies;