export function Benefits() {
  return (
    <>
      <div id="benefits-box">
        <p className="benefit" id="benefit-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          sollicitudin diam.
        </p>
        <p className="benefit" id="benefit-two">
          Etiam in accumsan felis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="benefit" id="benefit-three">
          Aenean accumsan, enim sed gravida facilisis, turpis sem ullamcorper
          tellus,
        </p>
      </div>

      <div id="benefit-radio-container">
        <input
          type="radio"
          name="slide"
          value="benefit-one"
          className="benefit-radio-boxes"
          id="benefit-radio-box-one"
          disabled
        />
        <input
          type="radio"
          name="slide"
          value="benefit-two"
          className="benefit-radio-boxes"
          id="benefit-radio-box-two"
          disabled
        />
        <input
          type="radio"
          name="slide"
          value="benefit-three"
          className="benefit-radio-boxes"
          id="benefit-radio-box-three"
          disabled
        />
      </div>

      <button className="benefit-slider-buttons" id="previous">
        {" "}
      </button>
      <button className="benefit-slider-buttons" id="next">
        {" "}
      </button>
    </>
  );
}
