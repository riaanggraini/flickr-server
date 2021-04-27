import config from "config";
import app from "./app";

const port = process.env.PORT || config.app.port;

app.listen(port, () => {
  console.info(`Listening on port ${port}`); // eslint-disable-line
});
