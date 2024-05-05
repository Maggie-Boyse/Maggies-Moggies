import "../SearchResultList/SearchResultList.scss";
import SearchResult from "../SearchResult/SearchResult";

export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList;


<div key={pattern.id} className="pattern__item">
<h3 className="pattern__title">{pattern.pattern_title}</h3>
<p className="pattern__username">{pattern.username}</p>
<p className="pattern__body">{pattern.pattern_body}</p>
<p className="pattern__timestamp">
  {moment(pattern.created_at).fromNow()}
</p>
</div>