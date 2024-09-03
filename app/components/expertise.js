"use client";
import { useRef, useEffect, useState } from "react";

const Expertise = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/expertises?populate=image")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="w-full h-screen md:h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <p className="text-center text-2xl md:text-[32px] text-costum-black mt-16 md:mt-32 mb-8 md:mb-[124px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-3/4 justify-center">
        {data.map((item) => {
          const imageUrl = `http://localhost:1337${item.attributes.image.data[0].attributes.url}`;

          return (
            <div
              key={item.id}
              className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                <p className="text-4xl lg:text-[100px] text-center">
                  {item.attributes.title}
                </p>
                <p className="mt-4 lg:mt-8 text-base lg:text-lg text-center w-full md:w-[375px] lg:w-[437px]">
                  {item.attributes.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
