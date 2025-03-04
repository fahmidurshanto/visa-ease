import Banner from "../../components/Banner/Banner";
import FeaturedDestinations from "../../components/FeaturedDestinations/FeaturedDestinations";
import LatestVisas from "../../components/LatestVisas/LatestVisas";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="py-10 ">
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <FeaturedDestinations></FeaturedDestinations>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;