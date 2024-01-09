import { useParams } from "react-router-dom";
import useOffer from "../hooks/useOffer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Offer() {
  const { offerId } = useParams();
  const [offer] = useOffer(offerId);

  return (
    <div className="px-56 py-16">
      <div className="text-2xl text-primary font-bold tracking-wider mb-8">
        {offer?.title}
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8 ">
        <div>
          <div dangerouslySetInnerHTML={{ __html: offer?.description }}></div>
          <div className="flex flex-col mt-8">
            <div className="text-gray-500">A partir de</div>
            <div className="text-primary text-2xl">{offer?.price}€ / pax</div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <PhotoProvider>
            {offer?.medias
              ?.filter((_, index) => index === 0)
              .map((media, index) => (
                <PhotoView src={media} key={index}>
                  <img
                    src={media}
                    alt=""
                    className="rounded-xl shadow-xl shadow-primary h-96 w-full object-cover"
                  />
                </PhotoView>
              ))}
          </PhotoProvider>
          <div className="grid grid-cols-4 gap-8 ">
            <PhotoProvider>
              {offer?.medias
                ?.filter((_, index) => index > 0)
                .map((media, index) => (
                  <PhotoView src={media} key={index}>
                    <img
                      src={media}
                      alt=""
                      className="rounded-xl shadow-xl shadow-primary h-36 w-full object-cover"
                    />
                  </PhotoView>
                ))}
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
