import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  {
    title: `Our online store has seen a surge in sales since
              switching to Bird.`,
    img: "/4.jpg",
    name: "Alex Turner",
    position: "Head of Marketing - Meta",
  },
  {
    title: `Setting up our online store was a breeze with
              Bird.`,
    img: "/5.jpg",
    name: "Olivia Wilde",
    position: "VP Marketing - Tesla",
  },
  {
    title: `Our customers love the smooth checkout process
              offered by Bird.`,
    img: "/6.jpg",
    name: "Chris Hemsworth",
    position: "Head of Finance - Apple",
  },
  {
    title: `Bird offers seamless integration with our existing systems and analytics tools.`,
    img: "/7.jpg",
    name: "Robert Downey Jr.",
    position: "Product Manager - Google",
  },
  {
    title: `We've seen a significant increase in customer satisfaction since implementing Bird.`,
    img: "/8.jpg",
    name: "Wonder Woman",
    position: "Chief Information Officer - Nvidia",
  },
  {
    title: `Our online store has seen a surge in sales since
              switching to Bird.`,
    img: "/9.jpg",
    name: "Ray Charles",
    position: "Head of Operations - Microsoft",
  },
];

const SecondSection = () => {
  return (
    <motion.section
      className="mx-auto max-w-[1440px] px-8 py-14 min-h-screen"
      id="community"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl md:text-5xl py-4 px-4">Community</h1>
        <h3 className="text-xl px-4 text-balance">
          Connect with like-minded entrepreneurs, share insights, and grow your
          business together. Join our vibrant e-commerce community for exclusive
          resources, networking opportunities, and expert advice.
        </h3>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 py-8 px-4 my-8">
        {data.map((item, index) => (
          <Card
            className="hover:shadow-xl cursor-pointer duration-200 border border-black/15 border-solid rounded-xl"
            key={index}
          >
            <CardHeader>
              <CardTitle className="font-bold text-md text-slate-600 px-3">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 -mt-2 ml-4">
              <div className="h-16 w-16">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain w-full h-full rounded-[25%]"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="my-2 font-semibold text-md">{item.name}</h4>
                <p className="text-sm font-light -mt-1">{item.position}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SecondSection;
