export function Textbox(props) {
  return (
    <input type={props.type} onChange={props.onChange} id={props.id} name={props.name} value={props.value} enabled={props.enabled} placeholder={props.placeholder} 
      className='border-0 border-b-2 px-1.5 pt-0.5 bg-slate-100 rounded-md border-slate-400 shadow-sm' />
  )
}