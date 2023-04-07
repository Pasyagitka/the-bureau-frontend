import { PhotoProvider, PhotoView } from "react-photo-view";

function PhotoReportItem({ src }: { src: string }) {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img src={src} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
}

export default PhotoReportItem;
