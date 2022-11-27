import './button.css';

export default function Button(props) {
  return (
    <button 
      type={props.type ? props.type : 'button'} 
      id={props.id}
      onClick={props.onClick}
      name={props.name} 
      value={props.value} 
      enabled={props.enabled} 
      className={
        props.className + ' btn ' + (
          (props.color == 'green') ? 'btn-green' : 
          ((props.color == 'red') ? 'btn-red' : '')
        )
      }
    >
      {props.children}
    </button>
  );
}