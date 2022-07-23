import { Icon } from '@iconify/react'
import unknownDisasterIcon from '@iconify/icons-mdi/help'

const UnknownDisasterMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={unknownDisasterIcon} className="location-icon" />
    </div>
  )
}

export default UnknownDisasterMarker