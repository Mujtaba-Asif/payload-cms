import { CollectionConfig, Block } from "payload/types";
import { Content, Media } from "./Blogs";

const Hero: Block = {
  slug: "hero",
  fields: [],
};

export const Cta: Block = {
  slug: "cta",
  fields: [
    {
      type: "text",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "text",
      label: "Href",
      name: "href",
      required: true,
    },
  ],
};

export const TwoColumns: Block = {
  slug: "twoColumns",
  fields: [
    {
      type: "blocks",
      name: "columnOne",
      label: "Column One",
      blocks: [Content, Media, Cta],
      minRows: 1,
      maxRows: 20,
    },
    {
      type: "blocks",
      name: "columnTwo",
      label: "Column Two",
      blocks: [Content, Media, Cta],
      minRows: 1,
      maxRows: 20,
    },
  ],
};

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          label: "Page Title",
          name: "pageTitle",
          admin: {
            width: "65%",
          },
          required: true,
        },
        {
          type: "text",
          label: "Slug",
          name: "slug",
          required: true,
          admin: {
            width: "35%",
          },
        },
      ],
    },
    // {
    //   type: "blocks",
    //   name: "content",
    //   label: "Content",
    //   blocks: [Hero, TwoColumns],
    // },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              type: "text",
              label: "Title",
              name: "title",
              required: true,
            },
            {
              type: "richText",
              label: "Description",
              name: "description",
            },
            {
              type: "upload",
              label: "Background Image",
              name: "backgroundImage",
              relationTo: "media",
            },
          ],
        },
        {
          label: "Page Layout",
          fields: [
            {
              type: "blocks",
              name: "content",
              label: "Content",
              blocks: [Content, Media, Cta],
              minRows: 1,
              maxRows: 20,
            },
          ],
        },
        {
          label: "Page Seo",
          fields: [
            {
              type: "text",
              name: "metaTitle",
              label: "Meta Title",
              required: true,
            },
            {
              type: "textarea",
              name: "metaDescription",
              label: "Meta Description",
              required: true,
            },
            {
              type: "checkbox",
              name: "followIndex",
              label: "Page Follow Index",
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
