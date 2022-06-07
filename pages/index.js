import DemoSection from "../components/demoSection";
import Banner from "../components/homeBanner";
import HowToGetThere from "../components/howToGetThere";
import PlacementsCompanies from "../components/placementCompanies";
import RecentPlacements from "../components/recentPlacements";
import RecommendedCourses from "../components/recommendedCourse";
import Review from "../components/reviews";
import LatestBlogs from "../components/latestBlogs";
import NewsLetter from "../components/newsLetter";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = ({ HomeData, FootData, HeadData }) => {
  const Data = HomeData.Global
  const DataFoot = FootData.Global
  const DataHead = HeadData.Global

  return (
    <>
      <Header data={DataHead} />
      {Object.keys(Data).map((k, i) => (
        <div key={i} >
          {(() => {
            switch (k) {
              case 'BannerSection':
                return <Banner data={Data} />
              case 'DemoSection':
                return <DemoSection data={Data} />
              case 'PlacementSection':
                return <PlacementsCompanies data={Data} />
              case 'AboutSection':
                return <HowToGetThere data={Data} />
              case 'RecentPlacementsSection':
                return <RecentPlacements data={Data} />
              case 'RecommendedCoursesSection':
                return <RecommendedCourses data={Data.RecommendedCoursesSection} />
              case 'RatingsReviewsSection':
                return <Review data={Data} />
              case 'BlogsSection':
                return <LatestBlogs data={Data} />
              case 'NewsSection':
                return <NewsLetter data={Data} />
              default:
                return null
            }
          })()
          }
        </div>

      ))
      }
      <Footer data={DataFoot} />
    </>
  );
}

export default Home;


export async function getStaticProps() {
  // console.log('Pre-rendering NewsArticleList')
  const response = await fetch('https://stage.front-api.skill-lync.com/home')
  const data = await response.json()

  const response1 = await fetch('https://stage.front-api.skill-lync.com/common/Footer')
  const DataFoot = await response1.json()

  const response2 = await fetch('https://stage.front-api.skill-lync.com/common/Header')
  const DataHead = await response2.json()

  return {
    props: {
      HomeData: data,
      FootData: DataFoot,
      HeadData: DataHead
    }
  }
}