import Logo from "../../assets/logo.svg";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto grid md:grid-cols-4 grid-cols-1 gap-4 lg:gap-6 px-12 py-4 mb-12">
      <div className="">
        <img src={Logo} alt="logo" />
        <div className="flex gap-2 pt-8">
          <Twitter />
          <Instagram />
          <Youtube />
          <Linkedin />
        </div>
      </div>
      <div className="">
        <h2 className="font-bold pb-8">Use Cases</h2>
        <ul className="font-light flex flex-col gap-2">
          <li>UI Design</li>
          <li>UX Design</li>
          <li>Wireframing</li>
          <li>Diagramming</li>
          <li>Brainstorming</li>
          <li>Online Whiteboard</li>
          <li>Team Collaboration</li>
        </ul>
      </div>
      <div className="">
        <h2 className="font-bold pb-8">Explore</h2>
        <ul className="font-light flex flex-col gap-2">
          <li>Design</li>
          <li>Prototyping</li>
          <li>Development features</li>
          <li>Design systems</li>
          <li>Collaboration features</li>
          <li>Design Process</li>
          <li>FigJam</li>
        </ul>
      </div>
      <div className="">
        <h2 className="font-bold pb-8">Resources</h2>
        <ul className="font-light flex flex-col gap-2">
          <li>Blogs</li>
          <li>Best Practices</li>
          <li>Color Wheel</li>
          <li>Colors</li>
          <li>Support</li>
          <li>Developers</li>
          <li>Resource Libraries</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
