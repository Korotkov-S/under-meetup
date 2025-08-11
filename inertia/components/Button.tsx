import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const classes =
    'rounded-38 py-[6px] px-[10px] text-white bg-blue-600 hover:bg-blue-700 transition-colors' +
    ` ${props.className}`
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  )
}
