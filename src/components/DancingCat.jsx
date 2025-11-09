import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/animations.css'
import './DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  // Keyboard accessibility - Space or Enter to toggle
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        // Only toggle if not already focused on the button
        if (document.activeElement?.tagName !== 'BUTTON') {
          event.preventDefault()
          toggleAnimation()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
          role="img"
          aria-label="Cute orange cat that can dance"
        />
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isAnimating ? 'Stop cat dancing animation' : 'Start cat dancing animation'}
        aria-pressed={isAnimating}
      >
        {isAnimating ? '⏸ Stop Dancing' : '▶ Start Dancing'}
      </button>

      <p className="keyboard-hint">
        💡 Tip: Press Space or Enter to toggle dancing
      </p>
    </div>
  )
}

export default DancingCat
