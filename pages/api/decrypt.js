import encrypted from "./encrypt";
import CryptoJS from "crypto-js";

const Key = "S_lb3G4-4wtwzoknaiy57yNGiG$5";
const decrypted = CryptoJS.AES.decrypt(encrypted, Key).toString(
  CryptoJS.enc.Utf8
);
const India = JSON.parse(decrypted);

export default India;
