/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const runningOnGitHubActions = Boolean(process.env.GITHUB_ACTIONS);

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: runningOnGitHubActions && repositoryName ? `/${repositoryName}` : '',
  assetPrefix: runningOnGitHubActions && repositoryName ? `/${repositoryName}/` : undefined,
};
