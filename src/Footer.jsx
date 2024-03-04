import FooterData from "./FooterData.js";
console.log(FooterData[0].image);
export default function Footer() {
  const footer = FooterData.map((data) => {
    return (
      <div className={data.classes} key={data.tag}>
        <img src={data.image} alt="" />
        <div>
          <h2>{data.tag}</h2>
          <h3>{data.heading}</h3>
          <p>{data.para}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="footer">
      {footer}
      {/* <img src="../assets/images/image-retro-pics.jpg" alt="" /> */}
    </div>
  );
}
