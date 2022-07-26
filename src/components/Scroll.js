const Scroll = (props) => {
  return (
    <div
      className="pa4"
      style={{
        height: "400px",
        overflowY: "scroll",
        borderTop: "1px solid black",
        borderBottom: "3px solid black",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
