export default function Star (props) {

  let starIcon = props.isFilled ? "Yes" : "No";

  return (
    <div>
      <h2 onClick={props.handleClick}>{starIcon}</h2>
    </div>
  );
} 