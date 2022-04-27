import '../App.css';

function Card({cardTitle, className, id}) {

  return (
    <div className={className + " card"} id={id}>
		<h2>{cardTitle}</h2>
    </div>
  );
}

export default Card;