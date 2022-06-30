import "../../css/landing/LandingPage.css";

export const Footer = ({ ...props }) => {
  return (
    <div className="footer">
      <p className="footer-hackathon-text ">
        Made for{" "}
        <a
          href="https://www.linode.com/"
          style={{ color: "white", textDecoration: "underline" }}
        >
          linode
        </a>{" "}
        x{" "}
        <a
          href="https://hashnode.com/"
          style={{ color: "white", textDecoration: "underline" }}
        >
          hashnode
        </a>{" "}
        hackathon
      </p>
    </div>
  );
};
