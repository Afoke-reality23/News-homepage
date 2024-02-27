import FooterData from "./FooterData";
console.log(FooterData[0].image);
export default function Footer() {
  const footer = FooterData.map((data) => {
    return (
      <div className={data.classes} key={data.tag}>
        <img src={data.image} alt="" />
        <div>
          <div>{data.tag}</div>
          <h3>{data.heading}</h3>
          <p>{data.para}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      {footer}
      <img src="../assets/images/image-retro-pics.jpg" alt="" />
    </>
  );
}
