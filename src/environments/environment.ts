// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'AGDvo5HrAl9cJFVW6vSmOBcoXNG26yhX',
    domain: 'surbanik.eu.auth0.com',
    audience: 'http://localhost:3001',
    redirect: 'http://localhost:3000/callback',
    scope: 'openid profile email'
  }
};
