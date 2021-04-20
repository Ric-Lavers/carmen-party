import Axios from "axios";
import { convertToImagesUrls } from "./utils";

export default async (req, res) => {
  try {
    const { data } = await Axios.get(
      "https://res.cloudinary.com/aeonknight/image/list/carmen-party.json"
    );
    res.json(convertToImagesUrls(data));
  } catch (error) {}
};
