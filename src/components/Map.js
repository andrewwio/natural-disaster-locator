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
        onClick={() => setLocationInfo({ 
          title: ev.title, 
          id: ev.categories[0].title, 
          latitude: ev.geometry[0].coordinates[1], 
          longitude: ev.geometry[0].coordinates[0],
          date: ev.geometry[0].date 
        })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_VOLCANOES) {
        return <VolcanoesMarker 
        key={index}
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ 
          title: ev.title, 
          id: ev.categories[0].title, 
          latitude: ev.geometry[0].coordinates[1], 
          longitude: ev.geometry[0].coordinates[0],
          date: ev.geometry[0].date 
        })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEALAKEICE) {
        return <SeaLakeIceMarker 
        key={index}
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ 
          title: ev.title, 
          id: ev.categories[0].title, 
          latitude: ev.geometry[0].coordinates[1], 
          longitude: ev.geometry[0].coordinates[0],
          date: ev.geometry[0].date 
        })}
        />
    }
    if(ev.categories[0].id === NATURAL_DISASTER_SEVERESTORMS) {
      return ev.geometry.map((geo) => {
        return (
          <SevereStormsMarker 
          key={index}
          lat={geo.coordinates[1]}
          lng={geo.coordinates[0]}
          onClick={() => setLocationInfo({ 
            title: ev.title, 
            id: ev.categories[0].title, 
            latitude: geo.coordinates[1], 
            longitude: geo.coordinates[0],
            date: geo.date 
          })}
          />
        )
      })      
    } else {
      return <UnknownDisasterMarker 
        lat={ev.geometry[0].coordinates[1]} 
        lng={ev.geometry[0].coordinates[0]} 
        onClick={() => setLocationInfo({ 
          title: "Congratulations! You've found an new natural disaster. Please contact the developer so we can add it to our app. Thank you!",
          id: ev.categories[0].title, 
          latitude: ev.geometry[0].coordinates[1], 
          longitude: ev.geometry[0].coordinates[0],
          date: ev.geometry[0].date 
        })}
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