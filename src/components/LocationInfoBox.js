const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>{ info.title }</h2>
      <ul>
        <li>DISASTER TYPE: <strong>{ info.id }</strong></li>
        <li>COORDINATES: <strong>{ info.latitude }, { info.longitude }</strong></li>
        <li>DATE: <strong>{new Intl.DateTimeFormat('en-US', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(info.date))}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox