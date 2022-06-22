import Path from "path";
import { defineConfig } from "vite";

/**
 * @description: @vitejs/plugin-react
 * 作用: 1. 解析react的文件路径
 *      2. 提供ReactFreshRuntime代码
 *      3. 负责转换react组件代码
 *
 */

import ReactPlugin from "@vitejs/plugin-react";

export default ({ comman, code }) => {
  return defineConfig({
    plugins: [ReactPlugin()],
    resolve: {
      alias: {
        "@": Path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".scss", ".less"],
    },
  });
};
