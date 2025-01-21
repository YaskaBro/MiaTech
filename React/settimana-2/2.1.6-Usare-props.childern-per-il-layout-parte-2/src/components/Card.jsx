const Card = ({ children, scusa }) => {
    return (
      <div className="card">
        {children}
        <h5>{scusa}</h5>
      </div>
    );
  };
  
  export default Card;