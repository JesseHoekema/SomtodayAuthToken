// encoded token
const encoded = "AccessToken!Expires!RefreshToken";

const [accessToken, expires, refreshToken] = encoded.split("!");

// the parts
console.log("Access Token:", accessToken);
console.log("Expires:", expires);
console.log("Refresh Token:", refreshToken);
