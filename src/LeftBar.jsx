import leftBarArray from "./leftBarArray";
export default function LeftBar() {
  const leftBars = leftBarArray.map((section, index) => {
    return (
      <LeftBarCom
        key={index}
        subHeading={section.subHeading}
        para={section.para}
      />
    );
  });
  return (
    <div className="left-bar">
      <h2 className="left-bar-heading">News</h2>
      {leftBars}
    </div>
  );
}

function LeftBarCom(props) {
  return (
    <div className="left-bar-sections">
      <h4 className="left-bar-sub-heading">{props.subHeading}</h4>
      <p className="left-bar-text">{props.para}</p>
      <hr />
    </div>
  );
}
