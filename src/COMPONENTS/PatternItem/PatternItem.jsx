import "../PatternItem/PatternItem.scss";

function PatternItem({ pattern }) {
  return (
    <section className="pattern">
      <div key={pattern.id} className="pattern__item">
        <h3 className="pattern__title">{pattern.pattern_title}</h3>
        <p className="pattern__username">{pattern.username}</p>
        <p className="pattern__body">{pattern.pattern_body}</p>
        <p className="pattern__timestamp">{pattern.created_at}</p>
      </div>
    </section>
  );
}

export default PatternItem;
