import "../../css/jobs/JobItem.css";

export const JobItem = ({ ...props }) => {
  return (
    <div className="job-item">
      <div className="job-title-and-description-container">
        <div className="job-title-text">{props.title}</div>
        {props.budget ? (
          <div className="job-description-text">{props.description} </div>
        ) : (
          <div
            className="job-description-text"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        )}
      </div>
      {props.budget ? (
        <div className="budget-text">Budget: {props.budget}</div>
      ) : null}
      <a href={props.url} className="job-url-text">
        view orignal job post
      </a>
    </div>
  );
};
