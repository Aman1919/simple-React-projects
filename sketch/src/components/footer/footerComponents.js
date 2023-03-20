const firstBox = () => {
  return (
    <div className="d-flex pb-2 pt-3 w-100 flex-wrap">
      <div>
        <h3 style={{ fontSize: "18px" }}>
          Incredible Design, right in your inbox
        </h3>
        <p
          className="lead mt-3"
          style={{ fontSize: "17px", color: "rgba(0,0,0,0.7)" }}
        >
          Subscribe to our Beyond the Canvas newsletter and get the latest
          design news, articles, resources and inspiration every month
        </p>
      </div>
      <div className=" d-flex align-items-center justify-content-center gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Email address"
        />
        <button className="btn btn-secondary" style={{ minWidth: "100px" }}>
          Try it out
        </button>
      </div>
    </div>
  );
};

const FooterListData = [
  {
    Heading: "Product",
    list: [
      "What's New",
      "Design",
      "Collaboration",
      "Prototyping",
      "Developer Handoff",
      "Apps",
      "Extensions",
      "Pricing",
    ],
  },
  {
    Heading: "Why Sketch",
    list: [
      "Switch to Sketch",
      "Sketch vs. Figma",
      "Sketch vs. Adobe XD",
      "Free for Education",
    ],
  },
  {
    Heading: "Learn",
    list: [
      "Blog",
      "Course: Sketch 101",
      "Course: Sketch 102",
      "Documentation",
      "Forum & Events",
      "Newsletter",
      "Developer Platform",
    ],
  },
  {
    Heading: "Support",
    list: ["Sketch Help", "Contact Us", "Manage License", "Service Status"],
  },
  {
    Heading: "Company",
    list: ["About Us", "Careers", "Terms & Policies", "Cookie Preferences"],
  },
];

const list = (Heading, list, j) => {
  return (
    <div key={j}>
      <h4 className="h5">{Heading}</h4>
      {list.map((e, i) => (
        <p
          style={{
            fontSize: "16px",
            color: "rgba(0,0,0,0.7)",
          }}
          key={i}
        >
          {e}
        </p>
      ))}
    </div>
  );
};

const AllList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between mt-2 mb-2  border-top border-bottom pt-3 pb-2 w-100">
      {FooterListData.map((e, i) => list(e.Heading, e.list, i))}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="m-3">
      {firstBox()}
      {AllList()}
    </footer>
  );
};
export { Footer };
