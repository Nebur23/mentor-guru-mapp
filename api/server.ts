import { SERVER_URI } from "@/constants";
import axios from "axios";

const serverApi = axios.create({
  baseURL: SERVER_URI,
});

export default serverApi;
