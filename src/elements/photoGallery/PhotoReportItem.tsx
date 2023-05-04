import { PhotoProvider, PhotoView } from "react-photo-view";

function PhotoItem({ src }: { src: string }) {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img src={src} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
}

export default PhotoItem;
