import phone from "../../images/home-phones.png";
import image1 from "../../images/screenshot2.png";

const Phonebar = () => {
  return (
    <div>
      <div className="relative w-[380.31] h-[581.14]">
        <img src={phone} />
        <div className="absolute top-7 right-[58px]">
          <img src={image1} />
        </div>
      </div>
    </div>
  );
};

export default Phonebar;
