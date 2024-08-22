import { GlobalConfig } from "payload/types";
const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "array",
      name: "quickLinks",
      label: "Quick Link",
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
      type: "array",
      name: "socialLinks",
      label: "Social Links",
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
        {
          type: "upload",
          name: "icon",
          label: "Icon",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      type: "group",
      name: "contact",
      label: "Contact",
      fields: [
        {
          type: "email",
          name: "email",
          label: "Contact Email",
          required: true,
        },
        {
          type: "text",
          name: "phoneNumber",
          label: "Contact Number",
          required: true,
        },
        {
          type: "textarea",
          name: "address",
          label: "Address",
          required: true,
        },
      ],
    },
    {
      type: "upload",
      name: "logo",
      label: "Logo",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Footer;
