// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react';
import { SunMoon, Moon } from 'lucide-react'

const Theme = {
  Light: 'light',
  Dark: 'dark'
} as const

export function ThemeSwitcher(){
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const isLight = theme === Theme.Light

  return (
    <Button isIconOnly color='warning' variant='faded' aria-label='theme' onClick={() => setTheme(isLight ? Theme.Dark : Theme.Light)}>
      { isLight ? <Moon/> : <SunMoon />}
    </Button> 
  )
};