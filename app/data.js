import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const users = [
  {
    username: "Johne",
    email: "johne.gmail.com",
    address: "New York",
    createdAt: "Nov 22 2023",
    isAdmin: "client",
    isActive: "active",
  },
  {
    username: "Dhoe",
    email: "dhoe.gmail.com",
    address: "Dtaka",
    createdAt: "Mer 25 2023",
    isAdmin: "client",
    isActive: "passive",
  },
  {
    username: "Dhoe",
    email: "dhoe.gmail.com",
    address: "Barisal",
    createdAt: "Mer 25 2023",
    isAdmin: "client",
    isActive: "passive",
  },
  {
    username: "Dhoe",
    email: "dhoe.gmail.com",
    address: "Khulna",
    createdAt: "Mer 25 2023",
    isAdmin: "client",
    isActive: "passive",
  },
];

export const products = [
  {
    title: "Watch",
    desc: "It's a popular watch",
    price: 24,
    createdAt: "Nov 22 2023",
    stock: "45",
  },
  {
    title: "iPhone",
    desc: "New model iPhone",
    price: 720,
    createdAt: "Nov 22 2023",
    stock: "32",
  },
  {
    title: "Drone",
    desc: "It's a mordern technology",
    price: 650,
    createdAt: "Nov 22 2023",
    stock: "22",
  },
];
