import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-gis3-401509.cloudfunctions.net/MembuatTokenUser";
    let tokenkey = "token";
    let tokenvalue = "9815a916179f9bc2a6316aab568a99362ffbe2e03dbeceebeff41a5038174e60";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result) {
    setInner("surat", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    if (result.message == "Password Salah") {
        window.location.href = "#gagal-login";
    } else {
        window.location.href = "#berhasil-login";
    }
}