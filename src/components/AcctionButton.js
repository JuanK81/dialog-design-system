

const AcctionButton = (props) => {
return (
  <button className={`acction-button ${props.type}`} onClick={props.onClick}>
    {props.text}
  </button>
);
};

export default AcctionButton;