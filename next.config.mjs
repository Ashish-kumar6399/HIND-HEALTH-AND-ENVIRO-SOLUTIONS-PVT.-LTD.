// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      });
  // module.exports={
  //   experimental:{
  //     missingSuspenseWithCSRBailout:false,
  //   },
  // }
      return config;
    },
  };
  
  export default nextConfig;