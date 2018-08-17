const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const options = require("./config");
const wpConfig = require("../../webpack.config");
const webpack = require("webpack");

const compiler = webpack(wpConfig);

const app = express();

app.set("view engine", "ejs");

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//routes
app.use("/api/customers", require("./routes/customerRouter"));
app.use("/api/orders", require("./routes/orderRouter"));

//connect db
sql.connect(options.connection).catch(err => console.log(err));

app.get("/*", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || options.port;
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
