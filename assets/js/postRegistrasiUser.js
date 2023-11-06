import { postNoToken } from "./api.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";

export default function RegistrasiAdmin(){
    let target_url = "https://asia-southeast2-gis3-401509.cloudfunctions.net/MembuatUser";
    let datainjson = {
        "username": getValue("username-regis-user"),
        "password": getValue("password-regis-user"),
        "role": "user"
    }

    postNoToken(target_url,datainjson,responseDataAdmin);

}

function responseDataAdmin(result) {
    setInner("regis-user", result.message);
    if (result.message == "Gagal Hash Password") {
        window.location.href = "#password-hash-gagal";
    }
    if (result.message == "Berhasil Input data") {
        window.location.href = "#berhasil-registrasi";
    }
}