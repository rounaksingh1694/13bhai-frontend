import "../../css/courses/CourseItem.css";

export const CourseItem = ({ ...props }) => {
  return (
    <div className="courseitem">
      <img src={props.imgUrl} className="course-image" />
      <div className="coursedata">
        <div className="course-title">{props.title} </div>
        <div className="course-description">{props.description} </div>
        <div className="course-author">{props.author} </div>
        {props.price ? <div className="course-price">{props.price}</div> : null}

        <a href={props.url} className="course-link">
          see here
        </a>
      </div>
    </div>
  );
};
