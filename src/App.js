import { Link } from "react-router-dom";
import "./App.css";
import useHeadline from "./hooks/useHeadline";
import useOffers from "./hooks/useOffers";
import { PhotoProvider, PhotoView } from "react-photo-view";

function App() {
  const [offers] = useOffers();
  const [headline] = useHeadline();

  return (
    <>
      <div
        style={{
          backgroundImage: `url("./assets/home_bg.jpg")`,
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div
          className="flex justify-center items-center text-white font-semibold tracking-wide text-4xl m-auto h-full"
          dangerouslySetInnerHTML={{ __html: headline }}
        ></div>
      </div>

      <div className="relative rounded-t-3xl -top-5 w-full bg-surface h-full px-56 py-8">
        <div className="text-center text-4xl mb-16 mt-8">Nos offres</div>

        <div className="flex flex-col gap-16">
          {offers.map((offer, index) => (
            <div
              className="grid grid-cols-2 gap-8 items-center"
              key={offer.title}
            >
              <PhotoProvider>
                <PhotoView src={[offer.image]}>
                  <img
                    src={offer.image}
                    alt=""
                    className={`rounded-xl shadow-xl shadow-primary h-96 w-full object-cover ${
                      index % 2 !== 0 && "order-last"
                    }`}
                  />
                </PhotoView>
              </PhotoProvider>

              <div>
                <div className="text-2xl text-primary font-bold tracking-wider">
                  {offer.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: offer.description }}
                ></div>
                <Link to={`/offer/${offer.id}`} className="text-primary">
                  <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
                    En savoir plus
                    <img
                      src="./assets/icons/arrow-right.svg"
                      alt=""
                      className="w-4 h-4 ml-4 scale-125"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
