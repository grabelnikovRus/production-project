import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode = env.mode || "development";
    const port = env.port || 3001

    return buildWebpackConfig({ 
        mode,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            output: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "html.html")
        },
        port
    })
};

// webpack.ProgressPlugin - показывает прогресс сборки
// resolve.extensions - при импорте не будут указываться эти расширения
// установить ts-node @types/node @types/webpack чтобы перевести конфиг вебпака на тс