import { ServiceData } from "../constants/ServiceData";

const ServiceCard = () => {
  return (
    <div className="w-full ">
      <h1 className="text-2xl font-medium uppercase text-center tracking-widest cormorant-garamond-h1 py-8 ">
        Available Services
      </h1>
      <div className="grid xl:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-2  p-2 rounded-2xl  w-full ">
        {ServiceData.map((item, index) => (
          <div
            key={item.title}
            className={` flex-col flex items-center justify-center md:gap-6 p-4 rounded-xl w-full border border-neutral-200 bg-[#FFFBF2]`}
          >
            <div className=" flex flex-col justify-start md:justify-center items-center rounded-full  drop-shadow-lg w-36 ">
              <img src={item.img} alt="" />
            </div>
            <div className="">
              <h1 className=" font-semi-bold text-lg font-semibold tracking-wide w-[90vw] md:w-72 ">
                {item.title}
              </h1>
              <p className="text-gray-600 mt-2 md:w-72 text-sm w-full montserrat-p ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-base text-gray-600 mt-6">
        All pujas, recitations, havans, and religious rituals are performed by
        qualified Vedic priests according to traditional scriptures.
      </p>
    </div>
  );
};

export default ServiceCard;
