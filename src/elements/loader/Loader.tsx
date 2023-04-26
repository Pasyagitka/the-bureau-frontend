import { Placeholder, Loader as RsuiteLoader } from "rsuite";

function Loader() {
  return (
    <div>
      <Placeholder.Paragraph rows={8} />
      <RsuiteLoader center size="lg" content="Загрузка..." />
    </div>
  );
}

export default Loader;
