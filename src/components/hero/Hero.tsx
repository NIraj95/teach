import {
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
  Play,
  Student,
  Teacher,
} from "../../assets/image";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex gap-20">
          <div className="max-w-[575px]">
            <h1 className="text-7xl font-bold mb-8 leading-[110%]">
              Teach students worldwide
            </h1>
            <p className="text-xl text-balance mb-8 leading-[160%]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>

            <div className="flex gap-2 mb-20">
              <button className="py-5 px-12 bg-orange-600 text-white text-2xl font-bold rounded-lg">
                Sign Up Now
              </button>
              <button className="flex items-center gap-4 py-5 px-5 bg-transparent hover:bg-gray-100 text-blue-600 hover:text-blue-600 text-xl font-bold rounded-lg">
                <img src={Play} alt="View Demo" />
                View Demo
              </button>
            </div>

            <div className="flex space-x-12">
              <p>
                Trusted by <br />
                leading companies
              </p>
              <div className="flex space-x-12">
                {[
                  CompanyLogo1,
                  CompanyLogo2,
                  CompanyLogo3,
                  CompanyLogo4,
                  CompanyLogo5,
                ].map((src) => (
                  <img width="32px" src={src} alt="" />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full relative">
            <div className="absolute top-0 right-[300px]">
              <ul className="list-none">
                <li className="rounded-t-xl rounded-bl-xl rounded-br-sm bg-white drop-shadow-md py-2 px-4 mb-4">
                  Nunc, at libero neque
                </li>
                <li className="rounded-t-xl rounded-bl-xl rounded-br-sm bg-white drop-shadow-md py-2 px-4 mb-4">
                  Viverra sed
                </li>
                <li className="rounded-t-xl rounded-br-xl rounded-bl-sm bg-blue-grey-700 text-white drop-shadow-md py-2 px-4 mb-4">
                  Turpis platea nunc mattis
                </li>
                <li className="rounded-t-xl rounded-br-xl rounded-bl-sm bg-blue-grey-700 text-white drop-shadow-md py-2 px-4 mb-4">
                  Vitae viverra ut non
                </li>
              </ul>
            </div>
            <figure className="absolute bottom-0 left-0">
              <img src={Teacher} alt="" />
            </figure>
            <figure className="absolute top-0 right-0">
              <img src={Student} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
