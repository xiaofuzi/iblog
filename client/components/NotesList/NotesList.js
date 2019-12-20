import "./NotesList.scss";

const renderTags = (tags = [], item) => {
  return (
    <span className="tags">
      {tags.map((tag, i) => {
        return <span key={i} className="tag has-gray">#{tag}</span>;
      })}
    </span>
  );
};

export default props => (
  <div className="notes-list">
    <ul>
      {props.items.map(item => {
        if (!item.title) return <i></i>
        return (
          <li className="note-item" key={item.key}>
            <a href={`/post/${item.key}/`} className="note-item-title">
              {item.title}
            </a>
            <div>{renderTags(item.tags || [])}</div>
            {/* <span className="create-time">{item.createdAt}</span> */}
          </li>
        );
      })}
    </ul>
  </div>
);
