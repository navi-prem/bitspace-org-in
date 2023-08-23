const production: boolean = false;
export const API_URL = (production) ? "https://api.bitspace.org.in" : "http://localhost:6969"

export const CLIENT_URL = (production) ? "https://bitspace.org.in" : "http://localhost:3000"

export const GITHUB_OAUTH_REDIRECT_URL = production ? CLIENT_URL + "/api/auth/callback" : CLIENT_URL + "/api/auth/callback";

export const GITHUB_OAUTH_AUTH_URL = "https://github.com/login/oauth/authorize";

export const GITHUB_OAUTH_CLIENT_ID = "e49d77123e22ded7e2e0";
export const GITHUB_SCOPE = "admin:user";
