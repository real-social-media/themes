const chalk = require('chalk');

function handler (data, serverless, options) {
  const domain = data['CloudFrontThemesDomainName']
  const urlRoot = `https://${domain}/`
  serverless.cli.consoleLog(`CloudFront themes.json url: ${chalk.yellow(urlRoot + 'themes.json')}`);
  serverless.cli.consoleLog(`CloudFront placeholder photos directory: ${chalk.yellow(urlRoot + 'placeholder-photos/')}`);
}

module.exports = { handler }
