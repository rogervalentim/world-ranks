import worldRank from "../assets/hero-image-wr.jpg";
import logo from "../assets/Logo.svg";

export function Hero() {
  return (
    <div className="flex justify-center lg:items-center">
      <img
        className="h-48 w-full object-cover lg:h-auto lg:object-contain"
        src={worldRank}
        alt="hero image"
      />
      <div className="absolute">
        <img
          className="h-28 w-28 lg:h-52 lg:w-52"
          src={logo}
          alt="logo image"
        />
      </div>
    </div>
  );
}
