import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
import LeafSVG from './svg/LeafSVG'

interface ILinkComponentProps {
  text: string
  href: string
  active: boolean
  setActive: () => void
}
const LinkComponent: React.FC<ILinkComponentProps> = (props) => {
  return (
    <>
      <Grid item>
        <div className="selected-icon">
          {props.active ? <LeafSVG height={20} width={20} /> : ''}
        </div>
        <Link href={props.href}>
          <a
            className="link-text"
            onClick={() => {
              props.setActive()
            }}
          >
            {props.text}
          </a>
        </Link>
      </Grid>
      <style jsx>{`
        .link-text {
          text-decoration: none;
          color: #707070;
          margin: 0 30px;
          font-size: 2vh;
        }
        .link-text:hover {
          opacity: 0.5;
        }
        .selected-icon {
          height: 20px;
          width: 20px;
        }
      `}</style>
    </>
  )
}

const LinkProps = [
  {
    text: 'Top',
    href: '/',
  },
  {
    text: 'Collection',
    href: '/collection',
  },
  {
    text: 'About',
    href: '/about',
  },
]

const Layout: React.FC = (props) => {
  const [active, setActive] = useState<number>(-1)

  const Links = LinkProps.map((props, index) => {
    return (
      <LinkComponent
        key={`${index}-link`}
        {...props}
        setActive={() => {
          setActive(index)
        }}
        active={active === index}
      />
    )
  })

  return (
    <>
      {props.children}
      <div className="menu-block">
        <Grid container justify="center">
          {Links}
        </Grid>
      </div>
      <style jsx>{`
        .menu-block {
          width: 100%;
          position: absolute;
          bottom: 15vh;
        }
      `}</style>
    </>
  )
}

export default Layout
