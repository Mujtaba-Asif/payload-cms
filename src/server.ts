import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();
const { PORT } = process.env;

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(PORT, () => {
    payload.logger.info(`App is running on port:${PORT}`);
  });
};

start();
