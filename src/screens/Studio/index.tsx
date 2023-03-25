import React from 'react'

import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useStudioStyles } from './styles'

function Studio() {
  const { classes } = useStudioStyles()
  return createPortal(
    <div className={classes.studio}>
      <Tooltip title="Checkout T-Shirts" placement="top" className={classes.tooltip}>
        <Link to="/clothstore/Product" className={classes.dot} />
      </Tooltip>
    </div>,
    document.body,
  )
}

export default Studio
