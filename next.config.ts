import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    compiler: {
      styledComponents: true,
    },
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.glsl$/,
        use: 'raw-loader',
      });

      if (!isServer) {
        config.optimization.splitChunks = {
          chunks: 'all', // Разделение бандлов по файлам
          // minSize: 50000,
          // maxSize: 200000,// Разделить файлы, превышающие 200 КБ
        };
  
        // Убираем ненужные логи
        config.performance = {
          hints: false,
        };
  
        config.optimization.minimize = true;
        config.optimization.concatenateModules = true;

      }
      return config;
    },
};

export default nextConfig;
