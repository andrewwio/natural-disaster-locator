import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import WildfiresMarker from './WildfiresMarker'
import VolcanoesMarker from './VolcanoesMarker'
import SeaLakeIceMarker from './SeaLakeIceMarker'
import SevereStormsMarker from './SevereStormsMarker'
import UnknownDisasterMarker from './UnknownDisasterMarker'

const NATURAL_DISASTER_WILDFIRES = 'wildfires';
const NATURAL_DISASTER_VOLCANOES = 'volcanoes';
const NATURAL_DISASTER_SEALAKEICE = 'seaLakeIce';
const NATURAL_DISASTER_SEVERESTORMS = 'severeStorms';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev) => {

    if(ev.categories[0].id === NATURAL_DISASTER_WILDFIRES) {
        return <WildfiresMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_VOLCANOES) {
        return <VolcanoesMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEALAKEICE) {
        return <SeaLakeIceMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEVERESTORMS) {
        return <SevereStormsMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    } else {
      return <UnknownDisasterMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
})
  

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
        {markers}
      </GoogleMapReact>
      {locationInfo ? <LocationInfoBox info={locationInfo} /> : null}
    </div>
  )
}

Map.defaultProps = {
  center: { 
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map