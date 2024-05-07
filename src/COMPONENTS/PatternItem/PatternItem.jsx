import "../PatternItem/PatternItem.scss";
import moment from "moment";

function PatternItem({ pattern }) {
  return (
    <section className="pattern">
      <div key={pattern.id} className="pattern__item">
        <h3 className="pattern__title">{pattern.pattern_title}</h3>
        {/* <div>{pattern.pattern_image}</div> */}
        <p className="pattern__username">{pattern.username}</p>
        <p className="pattern__body">{pattern.pattern_body}</p>
        <p className="pattern__timestamp">
          {moment(pattern.created_at).fromNow()}
        </p>
      </div>
    </section>
  );
}

export default PatternItem;
