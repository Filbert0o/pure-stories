// import { ENV } from './../core/env.config';

// interface AuthConfig {
//   CLIENT_ID: string;
//   CLIENT_DOMAIN: string;
//   AUDIENCE: string;
//   REDIRECT: string;
//   SCOPE: string;
// }

// export const AUTH_CONFIG: AuthConfig = {
//   CLIENT_ID: 'ENfu996a2uaw5LDuGq56X1roXlezz61X',
//   CLIENT_DOMAIN: 'gojitodo.auth0.com', // e.g., you.auth0.com
//   AUDIENCE: 'http://localhost:3000/api', // e.g., http://localhost:8083/api/
//   REDIRECT: `${ENV.BASE_URI}/callback`,
//   SCOPE: 'openid email profile read:users read:user_idp_tokens'
// };
import { ENV } from '../core/env.config';
import { environment } from '../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: `${environment.auth.clientID}`,
  CLIENT_DOMAIN: `${environment.auth.domain}`, // e.g., you.auth0.com
  AUDIENCE: `${environment.auth.audience}`, // e.g., http://localhost:8083/api/
  REDIRECT: `${environment.auth.redirect}`,
  SCOPE: `${environment.auth.scope}`
};

