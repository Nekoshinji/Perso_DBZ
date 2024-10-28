interface gentilCardprops {
  gentilsData: {
    name: string;
    imgSrc?: string;
  };
}

function gentilsCard({ gentilsData }: gentilCardprops) {
  return (
    <section>
      {gentilsData.imgSrc !== undefined ? (
        <img src={gentilsData.imgSrc} alt={gentilsData.name} />
      ) : (
        <p>"???"</p>
      )}
      <figcaption>{gentilsData.name}</figcaption>
    </section>
  );
}
export default gentilsCard;
