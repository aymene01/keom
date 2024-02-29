import * as React from 'react'
import Link from 'next/link'
import { VariantProps } from 'class-variance-authority'
import { variants } from './styles'
import {
  ReactElement,
  ReactNode,
  MouseEventHandler,
  HTMLAttributeAnchorTarget,
  forwardRef,
  MutableRefObject,
} from 'react'

type ButtonProps = {
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  submit?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
  onClick?: MouseEventHandler
  children: ReactNode
} & VariantProps<typeof variants>

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'md',
      disabled,
      leftIcon,
      rightIcon,
      center,
      submit,
      href,
      target,
      onClick,
      children,
    }: ButtonProps,
    ref,
  ) => {
    const styles = variants({ variant, size, disabled, center })

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as MutableRefObject<HTMLAnchorElement>}
          aria-disabled={!!disabled}
          className={styles}
          target={target}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </Link>
      )
    }

    return (
      <button
        ref={ref as MutableRefObject<HTMLButtonElement>}
        onClick={!disabled ? onClick : undefined}
        type={submit ? 'submit' : 'button'}
        disabled={!!disabled}
        aria-disabled={!!disabled}
        className={styles}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    )
  },
)
