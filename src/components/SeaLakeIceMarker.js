import { Icon } from '@iconify/react'
import seaLakeIceIcon from '@iconify/icons-mdi/snowflake'

const SeaLakeIceMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={seaLakeIceIcon} className="location-icon white" />
    </div>
  )
}

export default SeaLakeIceMarker