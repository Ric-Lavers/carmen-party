import { convertToFaceCircle } from "../pages/api/cloudinary/utils";
const uploadDemo =
  "https://res.cloudinary.com/demo/image/upload/w_200,h_200,r_100,c_thumb,g_face/butterfly.png";
// https://res.cloudinary.com/aeonknight/image/upload/c_scale,h_300,r_1000,w_300/v1618838008/carmen-party/carmen-face_lw2yo9.png

export const setUp = () => {
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "aeonknight",
      uploadPreset: "carmen-party",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        const imgUrl = convertToFaceCircle(result.info.public_id);
        players.push(createPlayer(imgUrl));
      }
    }
  );
  document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );
};
