/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@ynsjf/shared',
]);
module.exports = withPlugins(
  [withTM],
  {
    reactStrictMode: true,
  }
);
