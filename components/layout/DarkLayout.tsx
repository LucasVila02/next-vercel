import {FC, PropsWithChildren} from 'react'

export const DarkLayOut: FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
      backgroundColor:'rgba(0,0,0,0.3)',
      padding: '10px',
      borderRadius:'5px'
      
    }}>
      <h3>dark</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
