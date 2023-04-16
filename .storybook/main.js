module.exports = {
  stories: [
    '../packages/**/stories/*.stories.mdx',
    '../packages/**/stories/*.stories.@(jsx|tsx)',
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(jsx|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
