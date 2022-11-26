import './button.css';

export default function Button(props) {
  return (
    <button 
      type={props.type} 
      onChange={props.onChange} 
      id={props.id} 
      name={props.name} 
      value={props.value} 
      enabled={props.enabled} 
      className={
        (props.color == 'green') ? 'btn btn-green' : 
        ((props.color == 'red') ? 'btn btn-red' : 
        'btn')
      }
    >
      {props.children}
    </button>
  );
}