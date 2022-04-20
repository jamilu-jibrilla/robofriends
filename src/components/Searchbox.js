const Searchbox = ({ handleSearch }) => {
  return (
    <div>
      <input
        placeholder="search..."
        onChange={handleSearch}
        type="search"
        className="pa3 ba mb3 b--green bg-lightest-blue"
      />
    </div>
  );
};

export default Searchbox;
