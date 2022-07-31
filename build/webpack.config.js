import { merge } from "webpack-merge";
import baseConfig from "./webpack.base.config.js";
import devConfig from "./webpack.dev.config.js";
import proConfig from "./webpack.pro.config.js";

export default (env, argv) => {
	let config = argv.mode === "development" ? devConfig : proConfig;
	return merge(baseConfig, config);
};
