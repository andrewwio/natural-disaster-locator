import { Icon } from '@iconify/react'
import volcanoesIcon from '@iconify/icons-mdi/volcano-outline'

const VolcanoesMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={volcanoesIcon} className="location-icon volcano-color" />
    </div>
  )
}

export default VolcanoesMarker