export default function DataList({ items, className = "", getKey, renderItem }) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={getKey ? getKey(item, index) : index}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}
