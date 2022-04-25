import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "./../store/application.store";
import { t } from "i18next";

import HeaderBackgroundIMG from "./../assets/images/header_background.jpg";

const LandingPage = () => {
  document.title = `${t("title")} | ${t("page.landing_page")}`;
  const dispatch = useDispatch();
  dispatch(setActivePage("landing-page"));

  useSelector((state) => state.application);

  return (
    <div>
      <div
        className="bg-primary h-[800px]"
        style={{
          backgroundImage: `url(${HeaderBackgroundIMG})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-screen  text-center grid col-1 mt-[200px] text-white z-10 absolute h-fit">
          <h1 className="mx-auto lg:text-7xl md:text-5xl text-4xl font-bold">
            {t("header.slogan.1")}
          </h1>
          <h1 className="mx-auto lg:text-7xl md:text-5xl text-4xl font-bold">
            {t("header.slogan.2")}
          </h1>
          <h2 className="mx-auto lg:text-4xl md:text-3xl text-2xl font-bold mt-8">
            {t("header.slogan.3")}
          </h2>
          <button className="animate-bounce btn btn-info btn-lg w-max justify-self-center mt-16 ">
            {t("explore")}
          </button>
        </div>
      </div>
      <div className="mx-auto p-8 h-fit bg-slate-50 ">
        <div className="grid gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center md:w-1/1 lg:w-2/3 mx-auto">
          <div className="card min-w-full bg-white">
            <div className="card-body place-items-center">
              <img
                className="mask mask-hexagon w-2/6"
                src="https://api.lorem.space/image/shoes?w=160&h=160"
              />
              <h1 className="text-3xl font-bold">Create your own NFT</h1>
              <p>Lorem ipmsum dolor sit amet</p>
            </div>
          </div>
          <div className="card min-w-full bg-white">
            <div className="card-body place-items-center">
              <img
                className="mask mask-hexagon w-2/6"
                src="https://api.lorem.space/image/shoes?w=160&h=160"
              />
              <h1 className="text-3xl font-bold">Sent it as a Gift or NFT</h1>
              <p>Lorem ipmsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-white  md:w-1/1 lg:w-2/3 md:mx-2 lg:mx-auto my-6">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center md:w-1/1 lg:w-2/3 mx-auto">
          <div className="card min-w-fit bg-white ">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card min-w-fit bg-white ">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card min-w-fit bg-white ">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
