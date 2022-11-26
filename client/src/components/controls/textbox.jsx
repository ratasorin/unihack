import './textbox.css';

export default function Textbox(props) {
  return (
    <input type={props.type} onChange={props.onChange} required={props.required} id={props.id} name={props.name} value={props.value} enabled={props.enabled} placeholder={props.placeholder} 
      className='textbox' />
  )
}