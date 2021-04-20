const baseImgUrl =
  "https://res.cloudinary.com/aeonknight/image/upload/h_300,r_1000,w_300,c_thumb,g_faces/v1618904402/";

export const convertToFaceCircle = (public_id) =>
  `${baseImgUrl}${public_id}.png`;

export const convertToImagesUrls = ({ resources }) => {
  return resources.map(({ public_id, format }) =>
    convertToFaceCircle(public_id)
  );
};
