import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash, 
  faSignOutAlt,
  faEdit, 
  faSpinner, 
  faCirclePlus, 
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
 return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faCirclePlus, faEnvelope, faMapMarkedAlt, faPhone, faLock);
};

export default Icons;