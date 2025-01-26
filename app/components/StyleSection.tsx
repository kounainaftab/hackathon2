import Image from "next/image";

const StyleSection = () => {
  const styles = [
    { img: "/chair4.png" }, // Yellow chair (Main image)
    { img: "/chair2.png" },
    { img: "/chair10.png" },
    { img: "/chair2.png" },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-6">
        {/* Vertical Text Section */}
        <div className="w-12 lg:w-24 flex items-center justify-center mb-6 lg:mb-0">
          <p className="transform -rotate-90 text-xl font-semibold text-gray-700 whitespace-nowrap">
            Explore New and Popular Styles
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Main Image (Yellow Chair) */}
          <div className="relative flex justify-center lg:w-1/2 mb-4 lg:mb-0 animate-float">
            <div className="absolute inset-0 animate-light-glare pointer-events-none z-10"></div>
            <Image
              src="/chair8.png" // Yellow chair
              alt="Main Style"
              width={648} // Adjust as per the design
              height={648} // Adjust as per the design
              className="object-cover rounded-lg"
            />
          </div>

          {/* Grid of Smaller Images */}
          <div className="grid grid-cols-2 gap-6 lg:w-1/2">
            {styles.map((style, index) => (
              <div key={index} className="relative w-full h-auto animate-float">
                <div className="absolute inset-0 animate-light-glare pointer-events-none z-10"></div>
                <Image
                  src={style.img}
                  alt={`Style ${index + 2}`} // Correct index usage
                  width={312} // Adjust as per design
                  height={312} // Adjust as per design
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSection;