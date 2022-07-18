import Shape1 from "../assets/shape1.png";
import Shape2 from "../assets/shape2.png";
import Shape3 from "../assets/shape3.png";
import Shape4 from "../assets/shape4.png";

const PageLoader = () => {
  return (
    <>
      <div className="pageloader">
        <p className="loader">
          <span>Rafael Leal</span>

          <span>Developer Portfolio </span>
        </p>
        <div className="images-wrapper">
          <img src={Shape1} alt="" />
          <img src={Shape2} alt="" />
          <img src={Shape3} alt="" />
          <img src={Shape4} alt="" />
        </div>
      </div>
    </>
  );
};

export default PageLoader;
