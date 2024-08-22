import { Cta } from "../collections/Pages";
import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  fields: [
    {
      type: "array",
      name: "navItems",
      fields: [
        {
          type: "text",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "text",
          name: "herf",
          label: "Href",
          required: true,
        },
      ],
    },
    {
      type: "upload",
      relationTo: "media",
      name: "logo",
      label: "Logo",
      required: true,
    },
    {
      type: "blocks",
      name: "cta",
      label: "Cta",
      blocks: [Cta],
    },
  ],
};

export default Header;
