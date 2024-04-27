const Button = props => {
  const {className, buttonText} = props
  return <button className={`btn${className}`}>{buttonText}</button>
}

const element = (
  <div class='bg-conatiner'>
    <h1>Social Buttons</h1>
    <div>
      <Button buttonText='Like' className='1' />
      <Button buttonText='Comment' className='2' />
      <Button buttonText='Share' className='3' />
    </div>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
