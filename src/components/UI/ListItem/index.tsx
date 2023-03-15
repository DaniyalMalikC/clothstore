import {
  ListItem as MUIListItem, Avatar, ListItemAvatar, ListItemText, Divider,
} from '@mui/material'
import React from 'react'
import { ListItemProps } from './types'
import useTheme from '../../../common/utils/theme'

function ListItem(props: ListItemProps) {
  const {
    icon, primarylabel, secondarylabel, divider,
  } = props
  const theme = useTheme()

  return (
    <>
      <MUIListItem {...props}>
        {icon && (
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: theme.primaryColor }}>
            {icon}
          </Avatar>
        </ListItemAvatar>
        )}
        {(primarylabel || secondarylabel) && <ListItemText
          primaryTypographyProps={{ fontSize: '0.7rem' }}
          secondaryTypographyProps={{ fontSize: '1.2rem', display: 'flex', flexDirection: 'row' }}
          primary={primarylabel}
          secondary={secondarylabel}
          color="white"
        />}
      </MUIListItem>
      {divider && <Divider />}
    </>
  )
}

export default ListItem
