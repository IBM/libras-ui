import React from 'react'
import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction
} from 'carbon-components-react/lib/components/UIShell'
import Notification20 from '@carbon/icons-react/lib/notification/20'
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import { Link } from 'react-router-dom'

const PageHeader = () => (

  <Header aria-label='Projeto Libras'>
    <SkipToContent />
    <HeaderName element={Link} to='/' prefix='IBM'>
      Libras
    </HeaderName>
    <HeaderNavigation aria-label='Projeto Libras'>
      <HeaderMenuItem element={Link} to='/admin'>
        Admin Page
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label='Notifications'>
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label='User Avatar'>
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label='App Switcher'>
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
)

export default PageHeader
