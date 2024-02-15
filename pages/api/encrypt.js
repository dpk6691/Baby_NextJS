import India from "./India.json";
import CryptoJS from "crypto-js";

const IndiaData = India;
const Key = "S_lb3G4-4wtwzoknaiy57yNGiG$5";
const String = JSON.stringify(IndiaData);

const encrypted = CryptoJS.AES.encrypt(String, Key).toString();

export default encrypted;
