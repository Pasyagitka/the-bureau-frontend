/* eslint-disable @typescript-eslint/no-unused-vars */
import { Uploader } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import { useState } from "react";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

function Avatar({ fileInfo, setFileInfo }) {
  const [avatarPreview, setAvatarPreview] = useState(null);

  return (
    <Uploader
      fileListVisible={false}
      listType="picture"
      action=""
      onChange={(file) => {
        previewFile(file[0].blobFile, (value) => {
          setAvatarPreview(value);
        });
        setFileInfo(file);
      }}
    >
      <button style={{ width: 150, height: 150 }} type="button">
        {avatarPreview ? (
          <img src={avatarPreview} width="100%" height="100%" alt="" />
        ) : (
          <AvatarIcon style={{ fontSize: 80 }} />
        )}
      </button>
    </Uploader>
  );
}

export default Avatar;
