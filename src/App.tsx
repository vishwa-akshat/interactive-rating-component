import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

import { useGlobalStore } from "./store/globalStore";

import "./App.scss";

function App() {
    const isRatingSubmitted = useGlobalStore(
        (state) => state.isRatingSubmitted
    );
    return (
        <div className="container">
            {isRatingSubmitted ? <ThankYouCard /> : <RatingCard />}
        </div>
    );
}

export default App;
