import vid from "./../../assets/video/vid.mp4";
import Button from "../button/Button";

const Video = () => {
  return (
    <div className="relative w-full video-container">
      <video
        src={vid}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></div>
      <div className="absolute top-[60px] md:top-32 left-1/2 transform -translate-x-1/2 text-white z-10 text-center md:w-1/4">
        <p className="text-2xl">Form us to favorite part ygy</p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat et
          saepe accusantium autem enim, alias quos quaerat error non libero,
          sapiente, quisquam voluptatibus unde sit amet nam aliquam! Quasi,
          maxime!
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Video;
