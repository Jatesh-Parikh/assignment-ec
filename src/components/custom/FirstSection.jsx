import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  {
    img: "/16.jpg",
  },
  {
    img: "/17.jpg",
  },
  {
    img: "/18.jpg",
  },
  {
    img: "/19.jpg",
  },
  {
    img: "/20.jpg",
  },
  {
    img: "/21.jpg",
  },
  {
    img: "/22.jpg",
  },
  {
    img: "/23.jpg",
  },
];

const FirstSection = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-8 py-20 md:py-24 md:h-[600px] h-[400px]"
      id="products"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="px-12"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              className="flex justify-center items-center md:basis-1/2 relative"
              key={index}
            >
              <div className="absolute inset-0 w-full h-full bg-black/0.1 z-10" />
              <img
                src={item.img}
                alt=""
                className="w-[500px] h-auto object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8" />
        <CarouselNext className="mr-8" />
      </Carousel>
    </section>
  );
};

export default FirstSection;
