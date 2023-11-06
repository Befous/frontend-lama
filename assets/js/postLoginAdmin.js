import { postWithToken } from "./api.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function LoginAdmin(){
    let target_url = "https://asia-southeast2-gis3-401509.cloudfunctions.net/MembuatTokenAdmin";
    let tokenkey = "token";
    let tokenvalue = "9815a916179f9bc2a6316aab568a99362ffbe2e03dbeceebeff41a5038174e60";
    let datainjson = {
        "username": getValue("username-admin"),
        "password": getValue("password-admin")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseDataAdmin);

}

function responseDataAdmin(result) {
    setInner("admin", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    if (result.message == "Password Salah") {
        window.location.href = "#password-salah";
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "#berhasil-login-admin";
    }
}