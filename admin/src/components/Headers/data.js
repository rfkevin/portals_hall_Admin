import NewspaperIcon from "@mui/icons-material/Newspaper";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export const portalsHall = [
  {
    name: "News",
    icon: <NewspaperIcon />,
    page: "/news",
    divider: false,
  },
  {
    name: "Add News",
    icon: <NoteAddIcon />,
    page: "/addnews",
    divider: true,
  },
  {
    name: "Products",
    icon: <InventoryIcon />,
    page: "/products",
    divider: false,
  },
  {
    name: "Add Products",
    icon: <AddCircleIcon />,
    page: "/addproducts",
    divider: true,
  },

  {
    name: "Donations",
    icon: <VolunteerActivismIcon />,
    page: "/donations",
    divider: false,
  },
];
