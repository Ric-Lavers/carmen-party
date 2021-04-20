import Axios from "axios";
import cloudinary from "cloudinary";
import { convertToImagesUrls } from "./utils";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: false,
});

const getCarmenPartyUsersImages = async (req, res) => {
  try {
    return cloudinary.v2.search
      .expression("folder:carmen-party/*")
      .sort_by("public_id", "desc")
      .max_results(100)
      .execute()
      .then((result) => {
        res.json(convertToImagesUrls(result));
      });
  } catch (error) {
    console.error(error);
    res.json(["carmen-face.png"]);
  }
};

export default getCarmenPartyUsersImages;
