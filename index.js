import dotenv from "dotenv";
import express from "express";
import querystring from "querystring";
import axios from "axios";

dotenv.config();
const app = express();

app.get("/login", (req, res) => {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
      })
  );
});

app.get("/callback", (req, res) => {
  const code = req.query.code;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET_ID
        ).toString("base64"),
    },
    data: querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
    }),
  }).then((response) => {
    if (response.status === 200) {
      const { access_token, token_type } = response.data;
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        })
        .then((response) => {
          res.send(JSON.stringify(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.send(response);
    }
  });
});

app.listen(process.env.PORT);
