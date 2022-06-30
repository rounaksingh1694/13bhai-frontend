import "../../css/hackathons/HackathonItem.css";

export const HackathonItem = ({ ...props }) => {
  return (
    <div className="hackathon-item">
      <div className="hackathon-title-and-description-container">
        <div className="hackathon-title-text">{props.title}</div>
        {props.budget ? (
          <div className="hackathon-description-text">{props.description} </div>
        ) : (
          <div
            className="hackathon-description-text"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        )}
      </div>
      <a href={props.url} className="hackathon-url-text">
        apply here
      </a>
    </div>
  );
};
