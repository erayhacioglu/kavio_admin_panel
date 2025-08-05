import {
  FaBook,
  FaBuilding,
  FaChartColumn,
  FaClock,
  FaEye,
  FaGear,
  FaIdCard,
  FaLink,
  FaList,
  FaLocationDot,
  FaPalette,
  FaPhone,
  FaPlus,
  FaQrcode,
  FaQuestion,
  FaShieldHalved,
  FaTag,
  FaUserClock,
  FaUserGear,
  FaUserGroup,
  FaUserPlus,
  FaUsers,
  FaUsersGear,
  FaWrench,
} from "react-icons/fa6";
import { FaHandsHelping, FaHome } from "react-icons/fa";

const menuData = [
  {
    type: "item",
    name: "Anasayfa",
    icon: <FaHome />,
    path: "/",
  },

  { type: "title", name: "Ara Başlık Alanı" },
  {
    type: "block",
    name: "Açılır Menü",
    icon: <FaUsersGear />,
    items: [
      { name: "Table Component Örnek", icon: <FaUsers />, path: "/list" },
      { name: "Basic Form", icon: <FaUserPlus />, path: "/create" },
      {
        name: "Detail Sayfası",
        icon: <FaUserPlus />,
        path: "/user/10/profile",
      },
    ],
  },
];

export default menuData;
