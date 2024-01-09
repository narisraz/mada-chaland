import { useEffect, useState } from "react";
import { content } from "../core/api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function useOffer(offerId) {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    content.getEntry(offerId).then((offer) => {
      setOffer({
        title: offer.fields.title,
        description: documentToHtmlString(offer.fields.description),
        medias: offer.fields.medias.map((media) => media.fields.file.url),
        price: offer.fields.price,
      });
    });
  }, [offerId]);

  return [offer];
}
