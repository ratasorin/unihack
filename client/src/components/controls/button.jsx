export function Button(props) {
  if (props.color == 'green') {
    return (
      <button type={props.type} onChange={props.onChange} id={props.id} name={props.name} value={props.value} enabled={props.enabled} className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-btngreen1 to-btngreen2 transition-all hover:brightness-105 active:brightness-95">{props.children}</button>
    );
  } else if (props.color == 'red') {
    return (
      <button type={props.type} onChange={props.onChange} id={props.id} name={props.name} value={props.value} enabled={props.enabled} className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-purple-400 text-white transition-all hover:brightness-105 active:brightness-95">{props.children}</button>
    );
  } else {
    return (
      <button type={props.type} onChange={props.onChange} id={props.id} name={props.name} value={props.value} enabled={props.enabled} className="px-1.5 py-0.5 rounded-md bg-gradient-to-r  from-slate-300 to-sky-100 transition-all hover:brightness-105 active:brightness-95">{props.children}</button>
    );
  }
}