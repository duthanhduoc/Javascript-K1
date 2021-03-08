const clear = () => {
  document.querySelector('table tbody').innerHTML = ''
}

const handlePeriod = (period, dateString, month) => {
  if(month === 0) {
    const currentDate = new Date(dateString)
    period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  } else {
    const pre = new Date(dateString)
    let currentMonth = pre.getMonth() + 2
    let currentDate = pre.getDate()
    let currentYear = pre.getFullYear()
    if(currentMonth > 12) {
      currentMonth = 1
      currentYear += 1
    }
    const _currentDate = new Date(`${currentYear}-${currentMonth}-${currentDate}`)
    period.push(`${_currentDate.getFullYear()}-${_currentDate.getMonth() + 1}-${_currentDate.getDate()}`)
  }
  return period[month]
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  clear()
  const loan = Number(document.getElementById('loan').value)
  const months = Number(document.getElementById('months').value)
  const rate = Number(document.getElementById('rate').value)
  const disbursementDate = document.getElementById('disbursementDate').value

  const interest = Math.round((loan * months * rate) / 1200)
  const originalAndInterest = loan + interest
  document.getElementById('interest').value = interest.toLocaleString()
  document.getElementById(
    'originalAndInterest'
  ).value = originalAndInterest.toLocaleString()
  const period = []
  for (let i = 0; i <= months; i++) {
    let html
    if (i === 0) {
      html = `
      <td>${i}</td>
      <td>${handlePeriod(period, disbursementDate, i)}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      `
    } else if (i === months) {
      const originalPerMonth = loan - Math.round(loan / months) * (months - 1)
      const interestPerMonth =
        interest - Math.round((loan * rate) / 1200) * (months - 1)
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      html = `
      <td>${i}</td>
      <td>${handlePeriod(period, period[i - 1], i)}</td>
      <td>${originalPerMonth}</td>
      <td>${interestPerMonth}</td>
      <td>${originalAndInterestPerMonth}</td>
      <td>0</td>
      `
    } else {
      const originalPerMonth = Math.round(loan / months)
      const interestPerMonth = Math.round((loan * rate) / 1200)
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      const remainingOriginal = loan - originalPerMonth * i
      html = `
      <td>${i}</td>
      <td>${handlePeriod(period, period[i - 1], i)}</td>
      <td>${originalPerMonth}</td>
      <td>${interestPerMonth}</td>
      <td>${originalAndInterestPerMonth}</td>
      <td>${remainingOriginal}</td>
      `
    }
    const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
  }
})
