import toast from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
    IsEmpty(value){
        return value.length === 0;
    }
    IsMobile(value){
        return MobileRegx.test(value);
    }
    IsEmail(value){
        return EmailRegx.test(value);
    }
    SetEmail(value){
        sessionStorage.setItem("email", value);
    }
    GetEmail(){
        return sessionStorage.getItem("email");
    }
    SetOTP(value){
        sessionStorage.setItem("otp", value);
    }
    GetOTP(){
        return sessionStorage.getItem("otp");
    }
    ErrorToast(msg){
        toast.error(msg, {
            duration: 3000,
            position: "top-center",
            style: {
                background: "#f44336",
                color: "#fff"
            }
        });
    }
    SuccessToast(msg){
        toast.success(msg, {
            duration: 3000,
            position: "top-center",
            style: {
                background: "#4CAF50",
                color: "#fff"
            }
        });
    }
}

export const { IsEmpty, IsMobile, IsEmail, SetEmail, GetEmail, SetOTP, GetOTP, ErrorToast, SuccessToast } = new FormHelper();