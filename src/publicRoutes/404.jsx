import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HayliSpace from "./../assets/images/hayli_space.webp";

const _404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      navigate("/");
    }, 200000);
    return () => window.clearTimeout(timeoutID);
  }, [history]);

  return (
    <div className="mt-40 bg-black">
      <div className="">
        <img src={HayliSpace} />
        Redirecting...
      </div>
    </div>
  );
};

export default _404;
