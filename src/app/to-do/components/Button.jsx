const Button = (props) => {
  return (
    <button onClick={props.onClick} data-id={props.dataId} className='mx-1 px-1 border border-black'>{props.children}</button>
  )
}

export default Button