import genshin from "./../../assets/article/gg.jpg";
import Button from "../button/Button";
import LargeText from "../text/LargeText";
import MediumText from "../text/MediumText";

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row my-12">
      <div className="w-full md:w-1/2  content-center ">
        <LargeText text="EXA COMP" />
        <MediumText text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates aperiam repudiandae ab necessitatibus dignissimos provident! Nobis accusamus blanditiis facilis eos, id debitis modi repellat officia sunt nostrum obcaecati cum!" />
        <Button />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center flex-items-center">
        <img
          src={genshin}
          alt="genshin"
          className="rounded-lg h-[350px] scale-130"
        />
      </div>
    </div>
  );
};

export default About;
