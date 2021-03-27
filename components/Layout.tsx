import React, { useState } from 'react'
import Link from 'next/link'
import Model from '../components/3D'

interface ILinkComponentProps {
  text: string
  href: string
  active: boolean
  setActive: () => void
}
const LinkComponent: React.FC<ILinkComponentProps> = (props) => {
  return (
    <>
      <div className={props.active ? 'linkBlock current' : 'linkBlock'}>
        <Link href={props.href}>
          <a
            className={props.active ? 'linkText current' : 'linkText'}
            onClick={() => {
              props.setActive()
            }}
          >
            {props.text}
          </a>
        </Link>
      </div>
      <style jsx>{`
        .linkBlock {
          padding: 20px 5px;
          color: #000000;
        }
        .linkText {
          text-decoration: none;
          color: #000000;
          font-size: 2vh;
          display: block;
          text-orientation: sideways;
        }
        .linkText:hover {
          opacity: 0.5;
        }
        .current {
          background-color: #000000;
          color: #ffffff;
        }
        @media screen and (max-width: 896px) {
          .linkText:hover {
            opacity: 1;
          }
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
      <Model />
      {props.children}
      <div className="menu-block">{Links}</div>
      <style jsx>{`
        .menu-block {
          writing-mode: vertical-rl;
          display: flex;
          position: fixed;
          top: 30%;
          right: 0;
        }
      `}</style>
    </>
  )
}

export default Layout
