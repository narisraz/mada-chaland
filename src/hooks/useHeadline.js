import { useEffect, useState } from "react";
import { content } from "../core/api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function useHeadline() {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    content.getEntry("mvM8H2cs7vwzjMVY7cA12").then((res) => {
      console.log(res);
      setHeadline(documentToHtmlString(res.fields.value));
    });
  }, []);

  return [headline];
}
