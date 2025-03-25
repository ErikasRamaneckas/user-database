export default function SearchBar({ searchText, onSearch, onClear }) {
  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          value={searchText}
          onChange={(e) => onSearch(e.target.value)}
          type="text"
        />
        <button
          className="clear-button"
          onClick={onClear}
          type="button"
        >
          Clear
        </button>
      </div>
    </>
  );
}
