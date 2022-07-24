import { Icon } from '@iconify/react'
import headerIcon from '@iconify/icons-mdi/weather-tornado'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={headerIcon} /> Natural Disaster Locator<br /></h1>
            <div>(Powered by NASA)</div>
        </header>
    )
}

export default Header