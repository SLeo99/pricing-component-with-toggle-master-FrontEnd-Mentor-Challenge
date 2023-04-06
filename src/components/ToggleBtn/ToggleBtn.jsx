export default function ToggleBtn({timelapse, changeLapse}) {


  return (
    <div className='toggle'>
      <span>Annually</span>
      <div className='toggle__btn' aria-controls={timelapse} onClick={changeLapse}>
      </div>
      <span>Monthly</span>
    </div>
  )
}
