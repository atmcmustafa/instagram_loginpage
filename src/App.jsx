import Loginbar from "./components/Loginbar";
import Phonebar from "./components/Phonebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center mx-auto mr-auto">
      <div className="flex items-center justify-center mt-8 mb-8 mx-auto">
        <div className="md:block hidden">
          <Phonebar />
        </div>
        <div className="">
          <Loginbar />
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex flex-wrap justify-center md:justify-start px-6 md:px-0  font-[400] text-[#737373] text-[12px] leading-[16px] gap-2 md:gap-3">
          <li>
            <a href="https://about.meta.com/">Meta</a>
          </li>
          <li>
            <a href="https://about.instagram.com/">Hakkında</a>
          </li>
          <li>
            <a href="https://about.instagram.com/blog">Blog</a>
          </li>
          <li>
            <a href="https://about.instagram.com/">İş Fırsatları</a>
          </li>
          <li>
            <a href="https://help.instagram.com/">Yardım</a>
          </li>
          <li>
            <a href="https://developers.facebook.com/docs/instagram">API</a>
          </li>
          <li>
            <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">
              Gizlilik
            </a>
          </li>
          <li>
            <a href="https://help.instagram.com/581066165581870/">Koşullar</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/">Konumlar</a>
          </li>
          <li>
            <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          </li>
          <li>
            <a href="https://www.threads.net/login">Threads</a>
          </li>
          <li>
            <a href="https://www.facebook.com/help/instagram/261704639352628">
              Kişi Yükleme ve Hesabı Olmayan Kişiler
            </a>
          </li>
          <li>
            <a href="https://about.meta.com/technologies/meta-verified/">
              Meta Verified
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex font-[400] text-[#737373] text-[12px] leading-[14px] gap-2">
        <span>Türkçe </span>
        <span>© 2023 Instagram from Meta </span>
      </div>
    </div>
  );
}

export default App;
