function _error(props) {
  return (
    <div className="error-wrapper ">
      <div className="error-container h-screen flex">
        <div className="m-auto">
          <h1 className="text-3xl ">Error</h1>
          <p>Something went Wrong :( </p>
          <p>Looks like this page doesn't exists</p>
        </div>
      </div>
    </div>
  );
}
export default _error;
