import {
  BulbOutlined,
  MoneyCollectOutlined,
  GlobalOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export const MenuList = [
  {
    title: "Home",
    url: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Currencies",
    url: "/currencies",
    icon: <MoneyCollectOutlined />,
  },
  {
    title: "Exchanges",
    url: "/exchanges",
    icon: <GlobalOutlined />,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <BulbOutlined />,
  },
];
