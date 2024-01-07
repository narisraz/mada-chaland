import { useParams } from "react-router-dom";
import useOffer from "../hooks/useOffer";

export default function Offer() {
  const { offerId } = useParams();
  const [offer] = useOffer(offerId);
  console.log(offer);

  return (
    <div className="px-56 py-16">
      <div className="text-2xl text-primary font-bold tracking-wider mb-8">
        {offer?.title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: offer?.description }}></div>
      <div className="grid grid-cols-3 gap-8 mt-8 ">
        {offer?.medias?.map((media) => (
          <img
            src={media}
            alt=""
            className="rounded-xl shadow-xl shadow-primary h-96 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
