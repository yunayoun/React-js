import { Button } from '@mui/material'
import React, { Children } from 'react'

const CommonButton = ({children,color,disabled,variant,size,sx}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  )
}

export default CommonButton