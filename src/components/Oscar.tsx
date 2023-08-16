import React from 'react'

type OscarProps = {
  children: React.ReactNode
}

function Oscar({ children }: OscarProps) {  //Writing props direclty
  return (
    <div>{children}</div>
  )
}

export default Oscar