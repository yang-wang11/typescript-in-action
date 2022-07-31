import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
	entry: {
		app: "./src/index.ts",
	},
	output: {
		filename: "[name].js",
		path: resolve(__dirname, "./release"),
	},
	resolve: {
		extensions: [".js", ".tsx", ".ts"],
	},
	watchOptions: {
		ignored: [resolve(__dirname, "reference"), resolve(__dirname, "node_modules")],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: [
					{
						loader: "ts-loader",
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/tpl/index.html",
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
};
