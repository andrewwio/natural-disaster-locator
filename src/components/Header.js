import { Icon } from '@iconify/react'
import headerIcon from '@iconify/icons-mdi/weather-tornado'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={headerIcon} /> Natural Disaster Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header