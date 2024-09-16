import Image from "next/image";
const links = [
  {
    name: "Home",
    link: {
      className: "",
      href: "#",
    },
    className: "text-[#3267FF]",
  },
  {
    name: "About Us",
    link: {
      className: "",
      href: "#",
    },
    className: "",
  },
  {
    name: "Services",
    link: {
      className: "",
      href: "#",
    },
    className: "",
  },
  {
    name: (
      <div className="flex flex-row">
        Page
        {/* <FaChevronDown /> */}
        <Image
          className="ml-1"
          src="/images/arow.svg"
          width={15}
          height={15}
          alt="image"
        />
      </div>
    ),
    link: {
      className: "",
      href: "#",
    },
    className: "",
  },
  {
    name: "Contact Us",
    link: {
      className: "",
      href: "#",
    },
    className: "",
  },
];

export default links