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

  const markers = eventData.map((ev, index) => {

    if(ev.categories[0].id === NATURAL_DISASTER_WILDFIRES) {
        return <WildfiresMarker 
        key={index}
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_VOLCANOES) {
        return <VolcanoesMarker 
        key={index}
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEALAKEICE) {
        return <SeaLakeIceMarker 
        key={index}
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEVERESTORMS) {
      return ev.geometry.map((geo) => {
        return (
          <SevereStormsMarker 
          key={index}
          lat={geo.coordinates[1]}
          lng={geo.coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        )
      })      
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
    lat: 40,
    lng: -100
  },
  zoom: 0
}

export default Map