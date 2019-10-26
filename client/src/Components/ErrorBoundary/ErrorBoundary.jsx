import React from 'react'

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundaryStyle'
class ErrorBoundary extends React.Component {
  constructor () {
    super()

    this.state = {
      hasErrorrd: false
    }
  }

  static getDerivedStateFromError (error) {
    return { hasErrorrd: true}
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render () {
    return (
      this.state.hasErrorrd
        ? <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
            <ErrorImageText>Something went wrong</ErrorImageText>
        </ErrorImageOverlay>
        : this.props.children
    )
  }
}

export default ErrorBoundary
