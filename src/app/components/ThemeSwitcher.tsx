// app/components/ThemeSwitcher.tsx
'use client';

import { useEffect, useState, FC } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react'
import { SunMoon, Moon } from 'lucide-react'

const Theme = {
  Light: 'light',
  Dark: 'dark'
} as const

export const ThemeSwitcher: FC<{
  className?: string
}> = ({ className }) => {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const isLight = theme === Theme.Light

  return (
    <Button className={className} isIconOnly color='warning' variant='faded' aria-label='theme' onClick={() => setTheme(isLight ? Theme.Dark : Theme.Light)}>
      { isLight ? <Moon/> : <SunMoon />}
    </Button> 
  )
};