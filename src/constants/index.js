import {
  inotebook,

  chatApp,
  blog,
  news,
  cart,
  exp,
  ibm,
  zscaler

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Front End Web Developer",
    company_name: "IBM Skillsbuild",
    icon: ibm,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Completed a comprehensive Web Development Internship Plan with CSRBOX for the year 2024-2025.",
      "Gained hands-on experience in developing and implementing web-based solutions, showcasing technical skills in modern web technologies.",
      "Collaborated on projects that enhanced understanding of coding, debugging, and optimizing websites for performance and usability.",
      "Successfully applied theoretical knowledge in practical scenarios, achieving the internship completion milestone on 12 September 2024.",
    ],
  },
  {
    title: "Networking Intern",
    company_name: "zscaler",
    icon: zscaler,
    iconBg: "#E6DEDD",
    date: "January 2024 - March 2024",
    points: [
      "Successfully completed a virtual internship program with Zscaler, focusing on developing skills in cybersecurity and cloud-based solutions.",
      "Gained hands-on experience in cloud security and virtual networking through structured, remote learning and practical assignments.",
      "Strengthened knowledge in cybersecurity protocols and strategies while adapting to a fully virtual working environment.",
      "Earned recognition for completing the internship, showcasing adaptability and commitment to professional growth in a digital-first workspace.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Note Making",
    description:
      "iNotebook is a web-based platform designed to provide users with a seamless and intuitive solution for managing their personal notes and ideas. With its robust CRUD functionalities, users can effortlessly create, update, delete, and organize notes in a highly user-friendly environment. The platform features a secure login system powered by JWT authentication, ensuring that user data remains private and protected.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" },
      { name: "mongodb", color: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600" },
      { name: "tailwind", color: "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600" },
    ],
    image: inotebook,
    source_code_Link: "https://github.com/Achinmay05/inotebook",
  },
  {
    name: "Chatting App",
    description:
      "The iChat App is a real-time chatting application designed to provide seamless communication between users. With features like instant messaging, user authentication, and a sleek, responsive interface, it ensures a smooth and engaging chatting experience. Built with modern web technologies, the app is optimized for both performance and reliability, making it a perfect platform for staying connected.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" },
      { name: "restapi", color: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600" },
      { name: "socket.io", color: "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600" },
    ],
    image: chatApp,
    source_code_Link: "https://github.com/Achinmay05/chat-app",
  },
  {
    name: "Blog",
    description:
      "The Hunting Coder is a Next.js-powered blog site designed for sharing coding tutorials, tips, and insights with developers. The platform boasts fast performance, intuitive navigation, and a clean, minimalistic design to enhance user experience. It serves as a valuable resource for developers, providing high-quality content and practical knowledge to help them excel in their coding journey.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600" },
      { name: "tailwindcss", color: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600" },
    ],
    image: blog,
    source_code_Link: "https://github.com/Achinmay05/huntingcoder",
  },
  {
    name: "News",
    description:
      "The React-based News Application is a dynamic platform developed to provide users with the latest news updates from various trusted sources. With its fast performance, category-based filtering, and an intuitive user interface, it ensures that users can effortlessly browse and stay informed about topics that matter to them, such as technology, sports, or politics.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600" },
      { name: "tailwindcss", color: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600" },
    ],
    image: news,
    source_code_Link: "https://github.com/Achinmay05/newsapp",
  },
  {
    name: "Shopping Cart",
    description:
      "The React-based Shopping Cart Application is a user-friendly platform designed to provide a seamless shopping experience. With features to add, remove, and manage items in the cart, it ensures that users have complete control over their purchases.The application is built with a focus on efficiency and ease of use, offering a clean and responsive interface.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" },
      { name: "bootstrap", color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600" },
    ],
    image: cart,
    source_code_Link: "https://github.com/Achinmay05/shopping-cart-react",
  },
  {
    name: "Expense Tracker",
    description:
      "The Expense Tracker is a practical application designed to help users monitor and manage their finances effectively. With features to record income and expenses, categorize transactions, and view summaries, it offers a clear overview of financial activities.The app is intuitive and user-friendly, providing tools to track spending habits and maintain budgets efficiently.",
    tags: [
      { name: "react", color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" },
      { name: "redux", color: "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600" },
    ],
    image: exp,
    source_code_Link: "https://github.com/Achinmay05/exepense-tracker-react",
  },
];

export { projects, experiences };