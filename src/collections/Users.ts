import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  // auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    // {
    //   name: "dob",
    //   type: "date",
    //   required: true,
    // },
    // {
    //   name: "address",
    //   type: "textarea",
    // },
    // {
    //   name: "profilePicture",
    //   type: "upload",
    //   relationTo: "media",
    // },
  ],
};

export default Users;
