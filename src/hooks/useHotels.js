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
          res.items.map((hotel) => {
            return {
              description: hotel.fields.description,
              test: hotel.fields.test,
              medias: hotel.fields.medias.map((media) => media.fields.file.url),
            };
          })
        );
      });
  }, []);

  return [hotels];
}
