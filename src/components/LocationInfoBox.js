const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>{ info.title }</h2>
      <ul>
        <li>DISASTER TYPE: <strong>{ info.id }</strong></li>
        <li>COORDINATES: <strong>{ info.location }</strong></li>
        <li>DATE: <strong>{ info.date }</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox