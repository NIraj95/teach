import {
  Browser,
  ToolsIcon1,
  ToolsIcon2,
  ToolsIcon3,
  ToolsIcon4,
  ToolsIcon5,
  ToolsIcon6,
  ToolsIcon7,
  ToolsIcon8,
  ToolsIcon9,
} from "../../assets/image";

const Tools = () => {
  return (
    <section className="overflow-x-hidden bg-blue-grey-100 py-20 relative after:content-tools-grey-blob after:absolute after:top-[165px] after:right-0">
      <div className="container relative z-[1]">
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-8 text-center">
            All the tools that you need
          </h2>
          <p className="text-xl max-w-[830px] mx-auto text-center leading-[180%]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto relative before:content-tools-blob-left before:absolute before:top-[60px] before:left-[-75px] before:z-[-1] after:content-tools-blob-right after:absolute after:top-[130px] after:right-[-200px] after:z-[-1]">
          <img src={Browser} alt="Browser" />
        </div>

        <div className="text-center mt-20">
          <ul className="list-none flex items-center justify-center gap-16">
            {[
              ToolsIcon1,
              ToolsIcon2,
              ToolsIcon3,
              ToolsIcon4,
              ToolsIcon5,
              ToolsIcon6,
              ToolsIcon7,
              ToolsIcon8,
              ToolsIcon9,
            ].map((src) => (
              <li className="bg-white border-2 border-blue-grey-300 flex items-center justify-center w-16 h-16 rounded-xl">
                <img src={src} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
