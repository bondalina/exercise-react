const ArticlesList = ({ items }) => {
  return (
    <ul>
      {items.map(items => (
        <li key={items.objectId}>
          <a href={items.url}>{items.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
