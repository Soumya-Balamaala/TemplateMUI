import { styled } from "@mui/material/styles";
import {
  FiHome,
  FiUsers,
  FiUser,
  FiUserCheck,
  FiCalendar,
  FiDollarSign,
  FiChevronDown,
  FiPlus,
} from "react-icons/fi";
import { BiRestaurant, BiMessageDetail } from "react-icons/bi";
import { TbWaveSine } from "react-icons/tb";

// ................................................ Navbar Data
export const NavData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FiHome />,
  },

  {
    title: "Students",
    path: "/students",
    icon: <FiUsers />,
  },

  {
    title: "Teachers",
    path: "/teachers",
    icon: <FiUserCheck />,
  },

  {
    title: "Event",
    path: "/event",
    icon: <FiCalendar />,
  },

  {
    title: "Finance",
    path: "/finance",
    icon: <FiDollarSign />,
  },

  {
    title: "Food",
    path: "/food",
    icon: <BiRestaurant />,
  },

  {
    title: "User",
    path: "/user",
    icon: <FiUser />,
  },

  {
    title: "Chat",
    path: "/chat",
    icon: <BiMessageDetail />,
  },

  {
    title: "Latest Activity",
    path: "/lActivity",
    icon: <TbWaveSine />,
  },
];

// ................................................ Button Data

export const ButtonData = [
  {
    title: "Newest",
    variant: "outlined",
    endicon: <FiChevronDown />,
  },

  {
    title: "New Student",
    variant: "contained",
    starticon: <FiPlus />,
  },
];
