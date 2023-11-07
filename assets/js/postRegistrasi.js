import { postNoToken } from "./api.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";

export default function Registrasi(){
    let target_url = "https://asia-southeast2-gis3-401509.cloudfunctions.net/MembuatUser";
    let datainjson = {
        "username": getValue("username-regis"),
        "password": getValue("password-regis"),
        "role": "user"
    }

    postNoToken(target_url,datainjson,responseData);

}

function responseData(result) {
    setInner("regis", result.message);
    if (result.message == "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message == "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message == "Berhasil Input data") {
        window.location.href = "#berhasil-registrasi";
    }
}