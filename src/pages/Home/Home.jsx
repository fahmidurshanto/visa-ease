import Banner from "../../components/Banner/Banner";
import LatestVisas from "../../components/LatestVisas/LatestVisas";

const Home = () => {
    return (
        <div className="py-10 ">
            <Banner></Banner>
            <LatestVisas></LatestVisas>
        </div>
    );
};

export default Home;