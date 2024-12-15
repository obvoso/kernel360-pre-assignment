export function formatDate(inputDate) {
  const date = new Date(inputDate)

  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.toLocaleString('en-US', { year: 'numeric' })
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return `${day} ${month} ${year}, ${time}`
}
