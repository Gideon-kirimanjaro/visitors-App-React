const DateTime = ({ children }) => {
  //Control
  return (
    <div>
      <div className="ml-2 mt-2 mr-2">{children}</div>
    </div>
  );
};
DateTime.Title = (props) => {
  return <h5>{props.children}</h5>;
};
DateTime.Body = (props) => {
  return <h5>{props.children}</h5>;
};

export default DateTime;
