import { Button } from "../ui/button";

const data = [
  {
    img: "/1.jpg",
    title: "Scalable",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            blanditiis hic voluptatibus, atque accusamus beatae? Ipsam vitae
            odio dolor nobis aperiam eaque impedit dolorum?`,
    buttonText: "Learn More",
  },
  {
    img: "/2.jpg",
    title: "Versatile",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            blanditiis hic voluptatibus, atque accusamus beatae? Ipsam vitae
            odio dolor nobis aperiam eaque impedit dolorum?`,
    buttonText: "Learn More",
  },
  {
    img: "/3.jpg",
    title: "Modular",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            blanditiis hic voluptatibus, atque accusamus beatae? Ipsam vitae
            odio dolor nobis aperiam eaque impedit dolorum?`,
    buttonText: "Learn More",
  },
];

const ThirdSection = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-8 py-12 min-h-screen"
      id="solutions"
    >
      <h1 className="text-4xl md:text-5xl py-4 px-4">
        Fully Customizable eCommerce
      </h1>
      <h3 className="text-xl px-4 text-balance">
        Choose from a variety of store templates to get started. And customize
        your store to fit your brand.
      </h3>
      {data.map((item, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 py-8 px-4 my-8"
          key={index}
        >
          <div className="col-span-1">
            <img
              src={item.img}
              alt=""
              className="object-contain w-full h-auto rounded-lg "
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h4 className="mt-12 font-bold text-lg">{item.title}</h4>
            <p>{item.description}</p>
            <Button className="w-fit">{item.buttonText}</Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdSection;
