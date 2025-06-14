import React, { HTMLAttributeAnchorTarget } from 'react'

interface ButtonLinkProps {
  children: React.ReactNode
  className?: string
  href: string
  target?: HTMLAttributeAnchorTarget | undefined
}

const ButtonLink = ({ children, className, href, target }: ButtonLinkProps) => {
  const classes =
    'rounded-38 py-[6px] px-[10px] text-white bg-blue-600 hover:bg-blue-700 transition-colors' +
    ` ${className}`
  return (
    <a className={classes} href={href} target={target}>
      {children}
    </a>
  )
}

export default ButtonLink
