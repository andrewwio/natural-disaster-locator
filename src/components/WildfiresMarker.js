import { Icon } from '@iconify/react'
import wildfiresIcon from '@iconify/icons-mdi/fire'

const WildfiresMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={wildfiresIcon} className="location-icon" />
    </div>
  )
}

export default WildfiresMarker