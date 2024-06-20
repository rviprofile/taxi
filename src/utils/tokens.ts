import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token: string) {
	try {
        
	  const decoded = jwtDecode(token);

      if(decoded.exp) {
          return decoded.exp * 1000 < Date.now();
      }
       
      return true;

	} catch (error) {
	  return true;
	}
};