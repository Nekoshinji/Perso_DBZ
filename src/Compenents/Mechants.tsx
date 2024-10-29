interface mechantCardprops {
  mechantsData: {
    name: string;
    imgSrc?: string;
    Description: string;
  };
}

function mechantsCard({ mechantsData }: mechantCardprops) {
  return (
    <section>
      {mechantsData.imgSrc !== undefined ? (
        <img src={mechantsData.imgSrc} alt={mechantsData.name} />
      ) : (
        <p>"???"</p>
      )}
      <figcaption>{mechantsData.name}</figcaption>
      <p>{mechantsData.Description}</p>
    </section>
  );
}
export default mechantsCard;