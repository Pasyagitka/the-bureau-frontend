import PhotoReportItem from "./PhotoReportItem";

function PhotoGallery({ images = [] }: { images: Array<unknown> }) {
  const photoReportItems = images.map((x) => <PhotoReportItem src={x.file} key={x.id} />);
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{photoReportItems}</div>;
}

export default PhotoGallery;
