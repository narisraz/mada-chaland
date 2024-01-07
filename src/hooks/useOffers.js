import { useEffect, useState } from "react";
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function useOffers() {
  const [offers, setOffers] = useState([]);
  const content = contentful.createClient({
    space: "6wkh0zv78kbn",
    accessToken: "69meeX2pV21M4CdcfqHAwcFZfeUuJ4r3IoEgfoYmmE0",
  });

  useEffect(() => {
    content
      .getEntries({
        content_type: "offer",
      })
      .then((res) => {
        setOffers(
          res.items.map((offer) => {
            return {
              title: offer.fields.title,
              description: documentToHtmlString(offer.fields.description),
              image: offer.fields.medias[0].fields.file.url,
            };
          })
        );
      });
  }, [content]);

  return [offers];
}
