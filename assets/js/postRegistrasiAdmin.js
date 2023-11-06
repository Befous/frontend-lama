import { postNoToken } from "./api.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";

export default function RegistrasiUser(){
    let target_url = "https://asia-southeast2-gis3-401509.cloudfunctions.net/MembuatAdmin";
    let datainjson = {
        "username": getValue("username-regis-admin"),
        "password": getValue("password-regis-admin"),
        "role": "admin"
    }

    postNoToken(target_url,datainjson,responseDataAdmin);

}

function responseDataAdmin(result) {
    setInner("regis-admin", result.message);
    if (result.message == "Gagal Hash Password") {
        window.location.href = "#password-hash-gagal";
    }
    if (result.message == "Berhasil Input data") {
        window.location.href = "#berhasil-registrasi";
    }
}