import heroImage from "../../assets/head-02.png";
const HeroSection = () => {
  return (
    <div className="">
      <div className="">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          ligula in nunc tincidunt aliquet. Sed auctor, nunc id ultricies
          tincidunt, nisl nunc lacinia nunc, id aliquam nunc mauris a nunc.
        </p>
        <button className="bg-purplish text-white rounded-full py-2 px-6 mt-4">
          Start creating now
        </button>
      </div>
      <div className="">
        <img src={heroImage} alt="Preview Mind the Graph" />
      </div>
    </div>
  );
};

export default HeroSection;
