import { useEffect, useState } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { content } from "../core/api";

export default function useOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    content
      .getEntries({
        content_type: "offer",
      })
      .then((res) => {
        setOffers(
          res.items.map((offer) => {
            return {
              id: offer.sys.id,
              title: offer.fields.title,
              description: documentToHtmlString(offer.fields.description),
              image: offer.fields.medias[0].fields.file.url,
            };
          })
        );
      });
  }, []);

  return [offers];
}
