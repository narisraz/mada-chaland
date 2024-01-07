import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useEffect, useState } from "react";
import { content } from "../core/api";

export default function useHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    content
      .getEntries({
        content_type: "hotel",
      })
      .then((res) => {
        setHotels(
          res.items.map((car) => {
            return {
              description: documentToHtmlString(car.fields.description),
              medias: car.fields.medias.map((media) => media.fields.file.url),
            };
          })
        );
      });
  }, []);

  return [hotels];
}
