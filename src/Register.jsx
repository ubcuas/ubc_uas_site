import { useEffect } from 'react'
import './Register.css'

const Register = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="register-overlay" role="dialog" aria-modal="true">
      <div className="register-modal">
        <header className="register-modal__header">
          <h2>Sign in to UBC UAS</h2>
          <button type="button" className="register-modal__close" onClick={onClose}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </header>
        <p className="register-modal__intro">
          Full authentication is coming soon. Share your email and we&rsquo;ll keep you in the loop.
        </p>
        <form className="register-modal__form" onSubmit={(event) => event.preventDefault()}>
          <label className="register-modal__label" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            className="register-modal__input"
            required
          />
          <button type="submit" className="register-modal__submit">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
