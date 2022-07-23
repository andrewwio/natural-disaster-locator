import { Icon } from '@iconify/react'
import severeStormsIcon from '@iconify/icons-mdi/weather-hurricane'

const SevereStormsMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={severeStormsIcon} className="location-icon blue" />
    </div>
  )
}

export default SevereStormsMarker