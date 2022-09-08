export default {
  npmClient: "yarn",
  history: {
    type: "hash",
  },
  mfsu: false,
  chainWebpack(memo, { env }) {
    if (env === "development") {
      memo.devServer.headers = {
        ...memo.devServer.headers,
        "Access-Control-Allow-Origin": "*",
      };
    }
  },
};
