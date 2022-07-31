import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
	devtool: "eval-cheap-module-source-map",
	devServer: {
		port: 8080,
	},
};
