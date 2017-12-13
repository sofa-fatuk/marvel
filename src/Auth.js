import md5 from 'md5';

class Auth {
    normalizeUrl(url = '') {
        const ts = Date.now();
        const privateKey = '968736149a9ca614ee3d449cdf53a48fd4ebddd5';
        const publicKey = 'dafe22febbf82ad45806b42d1a04c3ad';
        const apikey = publicKey;
        
        const hash = md5(ts + privateKey + publicKey);
        const fullUrl = `${url}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
        return fullUrl;
    }
}

export default Auth;