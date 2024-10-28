interface mechantCardprops {
  mechantsData: {
    name: string;
    imgSrc?: string;
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
    </section>
  );
}
export default mechantsCard;