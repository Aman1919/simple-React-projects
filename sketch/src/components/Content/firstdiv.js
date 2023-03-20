import styled from "styled-components";

const First = styled.div`
  width: 600px;
  max-width: 90%;
  text-align: center;
  margin: auto;
`;
export const FirstDiv = () => {
  return (
    <div className="w-100 mt-5 mb-5 h-100">
      <First>
        <h1
          className="h1 mb-5"
          style={{
            fontSize: "3.4rem",
            fontWeight: "900",
            wordSpacing: ".1rem",
            lineHeight: "3.6rem",
            width: "100%",
          }}
        >
          Every hero needs a sidekick. We have two.
        </h1>
        <p style={{ fontSize: "24px" }} className="leading">
          Create with our award-winning macOS app, share your projects in the
          browser (on any platform), and take Sketch with you.
        </p>
      </First>
    </div>
  );
};
