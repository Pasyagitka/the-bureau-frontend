function StageBadge({ stage }) {
  const clean = <span className="px-3 py-1 text-sm rounded-full text-red-600  bg-red-200 ">Clean</span>;
  const rough = <span className="px-3 py-1 text-sm rounded-full text-yellow-600  bg-yellow-200 ">Rough</span>;

  if (stage === 1) return clean;
  if (stage === 2) return rough;
  return [clean, rough];
}

export default StageBadge;
