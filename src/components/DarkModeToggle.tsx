import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import MoonIcon from 'lucide-react/dist/esm/icons/moon'
import SunIcon from 'lucide-react/dist/esm/icons/sun'

export function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="w-8 h-8" aria-hidden="true" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-1.5 rounded-md hover:opacity-60 transition-opacity text-foreground"
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  )
}
