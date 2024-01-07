import { useEffect, useState } from "react";
import { content } from "../core/api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function useCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    content
      .getEntries({
        content_type: "car",
      })
      .then((res) => {
        setCars(
          res.items.map((car) => {
            return {
              description: documentToHtmlString(car.fields.description),
              medias: car.fields.medias.map((media) => media.fields.file.url),
            };
          })
        );
      });
  }, []);

  return [cars];
}
