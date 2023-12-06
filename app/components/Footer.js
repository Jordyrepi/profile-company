import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const FooterPage = () => {
  return (
    <div>
     <Footer container>
      <div className="w-full text-center">
        <div className="w-full ">
          <FooterLinkGroup className='flex justify-evenly'>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="../products">Products</FooterLink>
            <FooterLink href="../about">About us</FooterLink>
            <FooterLink href="..team">Team</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
    </div>
  )
}

export default FooterPage