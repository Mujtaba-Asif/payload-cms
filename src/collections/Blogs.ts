import { slateEditor } from "@payloadcms/richtext-slate";
import { CollectionConfig, Block } from "payload/types";

export const Content: Block = {
  slug: "contentBlock",
  fields: [
    {
      name: "content",
      type: "richText",
      defaultValue: [
        {
          children: [{ text: "Here is some default content for this field" }],
        },
      ],
      required: true,
      editor: slateEditor({
        admin: {
          elements: [
            "h2",
            "h3",
            "h4",
            "link",
            "blockquote",
            "textAlign",
            "upload",
            "indent",
            "ol",
            "ul",
          ],
          leaves: ["bold", "italic", "code", "underline", "strikethrough"],
          link: {
            fields: [
              {
                name: "rel",
                label: "Rel Attribute",
                type: "select",
                hasMany: true,
                options: ["noopener", "noreferrer", "nofollow"],
              },
            ],
          },
          upload: {
            collections: {
              media: {
                fields: [
                  {
                    type: "upload",
                    name: "media",
                    relationTo: "media",
                    label: "Image",
                  },
                ],
              },
            },
          },
        },
      }),
    },
  ],
};

export const Media: Block = {
  slug: "image",
  fields: [
    {
      type: "upload",
      name: "image",
      label: "Image",
      relationTo: "media",
    },
    {
      type: "text",
      name: "altText",
      label: "Alt Text",
    },
  ],
};
const Code: Block = {
  slug: "code",
  fields: [
    {
      name: "code",
      type: "code",
      label: "Code",
    },
  ],
};

const Blogs: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      label: "Cover Image",
      required: true,
      relationTo: "media",
    },
    {
      type: "text",
      name: "authorName",
      label: "Author Name",
      required: true,
    },

    {
      type: "upload",
      name: "authorProfilePictutre",
      label: "Author Profile Picture",
      relationTo: "media",
    },
    {
      name: "content",
      label: "Content",
      type: "blocks",
      minRows: 1,
      maxRows: 20,
      blocks: [Content, Media, Code],
    },
  ],
};

export default Blogs;
