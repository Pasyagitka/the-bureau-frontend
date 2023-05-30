/* eslint-disable @typescript-eslint/no-unused-vars */
import { Uploader } from "rsuite";
import { useState } from "react";
import { FaFileInvoiceDollar, FaUser as AvatarIcon } from "react-icons/fa";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

function Avatar({ fileInfo, setFileInfo, isInvoice }) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const icon = (isInvoice && <FaFileInvoiceDollar style={{ fontSize: 50 }} />) ?? (
    <AvatarIcon style={{ fontSize: 50 }} />
  );

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
        {avatarPreview ? <img src={avatarPreview} width="100%" height="100%" alt="" /> : icon}
      </button>
    </Uploader>
  );
}

export default Avatar;
