

import { ActiveLink } from "./ActiveLink"


const NavBar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
      <nav>
        {menuItems.map(  ({text, href})  => (
           <ActiveLink 
            key={text}
            text={text}
            href={href}
          />
        
            )
          )
        }
        
       
      </nav>

  )
}

export default NavBar

