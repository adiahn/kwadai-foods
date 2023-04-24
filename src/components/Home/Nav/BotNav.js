import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const BotNav = () => {
  return (
    <div className='bot-nav'>
      <ul className='setting-nav'>
        <li>
          <section>
            <SettingsOutlinedIcon/>
            Settings
          </section>
        </li>
      </ul>
    </div>
  )
}

export default BotNav
