import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  {
    img: "/10.jpg",
    title: "The Ultimate Guide to E-commerce",
    description: `Dive deep into the world of e-commerce with our comprehensive
                guide, covering everything from setting up your online store to
                marketing and customer service.`,
  },
  {
    img: "/11.jpg",
    title: "Mobile Optimization Made Easy",
    description: `Learn how to optimize your e-commerce store for mobile devices to reach a wider audience and improve user experience.`,
  },
  {
    img: "/12.jpg",
    title: "Marketing Strategies That Work",
    description: `Discover effective marketing strategies to attract new customers, increase brand awareness, and drive sales for your e-commerce business.`,
  },
  {
    img: "13.jpg",
    title: "Fulfillment and Logistics Tips",
    description: `Get expert advice on efficient order fulfillment, shipping, and logistics to ensure a seamless customer experience.`,
  },
  {
    img: "/14.jpg",
    title: "E-commerce Analytics and Insights",
    description: `Learn how to use data analytics to track your e-commerce performance, identify trends, and make informed business decisions.`,
  },
  {
    img: "/15.jpg",
    title: "Customer Service Excellence",
    description: `Discover best practices for providing exceptional customer service, building loyalty, and increasing customer satisfaction.`,
  },
];

const FourthSection = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-8 py-14 min-h-screen"
      id="resources"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -1000,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: "all 0.01s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl py-4 px-4">Resources</h1>
        <h3 className="text-xl px-4 text-balance">
          Empower your e-commerce journey with our comprehensive resources.
          Access valuable guides, articles, webinars, and templates to optimize
          your online store, drive sales, and stay ahead of the curve.
        </h3>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 py-8 px-4 my-8">
        {data.map((item, index) => (
          <Card
            className="hover:shadow-xl cursor-pointer duration-200 max-w-[375px]"
            key={index}
          >
            <CardContent className="flex flex-col gap-4">
              <div className="h-48 w-36 mt-4">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-balance font-semibold">
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-2 text-balance text-light">
                  {item.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
