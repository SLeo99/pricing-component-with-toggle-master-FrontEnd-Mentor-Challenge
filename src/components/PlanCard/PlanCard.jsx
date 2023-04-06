export default function PlanCard({ id, timelapse, storage, accounts, gb, gradient}) {

  return (
    <div className={gradient ? 'card card--gradient' : 'card'}>
      <div className={gradient ? 'card__price card__price--white' : 'card__price'}>
        <p>{id}</p>
        <p><span>$</span>{timelapse}</p>
      </div>
      <div className={gradient ? 'card__details card__details--white' : 'card__details'}>
        <p>{storage}</p>
        <p>{accounts}</p>
        <p>{gb}</p>
      </div>
      <button className={gradient ? 'card__btn card__btn--white' : 'card__btn'}>Learn More</button>
    </div>
  )
}
