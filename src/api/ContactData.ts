import { BiLogosGmail, BiSolidMap } from "solid-icons/bi";
import { FaSolidPhone } from "solid-icons/fa";

interface Contact {
  icon: any;
  title: string;
  content: string;
}

const ContactData: Contact[] = [
  {
    icon: BiLogosGmail,
    title: "Email",
    content: "radonlabinfo@gmail.com",
  },
  {
    icon: FaSolidPhone,
    title: "Phone",
    content: "",
  },
  {
    icon: BiSolidMap,
    title: "Location",
    content: "",
  },
];

export default ContactData;
