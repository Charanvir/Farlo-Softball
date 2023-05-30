import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePageCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: "/images/teamPicture1.jpeg", alt: "Image 1 description" },
    { src: "/images/teamPicture2.jpeg", alt: "Image 2 description" },
    { src: "/images/titleBall.jpeg", alt: "Image 3 description" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(
        (prevActiveImage) => (prevActiveImage + 1) % images.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-64 h-64 ${
            index !== activeImage ? "hidden md:block" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
