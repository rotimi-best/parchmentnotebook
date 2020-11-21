import React from 'react'

function FormatTime ({ className, seconds }) {
  if (isNaN(seconds)) {
    return '0:00';
  }

  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
  )
}

export default function PlayTimeProgress ({ elapsed, duration }) {
  return (
    <span>
      (<FormatTime seconds={elapsed} />/<FormatTime seconds={duration} />)
    </span>
  )
}

function format (seconds) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

function pad (string) {
  return ('0' + string).slice(-2)
}
