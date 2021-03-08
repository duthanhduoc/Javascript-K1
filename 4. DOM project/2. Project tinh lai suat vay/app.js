const handlePeriod = (period, dateString, month) => {
  if (month === 0) {
    const currentDate = new Date(dateString)
    period.push(
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    )
  } else {
    const pre = new Date(dateString)
    let month = pre.getMonth() + 2,
      year = pre.getFullYear(),
      date = pre.getDate()
    if (month > 12) {
      month = 1
      year += 1
    }
    const currentDate = new Date(`${year}-${month}-${date}`)
    period.push(
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    )
  }
  return period[month]
}

document.querySelector('.handle').addEventListener('click', (event) => {
  event.preventDefault()
  // clear table
  document.querySelector('tbody').innerHTML = ''
  const loan = Number(document.getElementById('loan').value)
  const months = Number(document.getElementById('months').value)
  const rate = Number(document.getElementById('rate').value)
  const disbursementDate = document.getElementById('disbursementDate').value
  const totalInterest = Math.round((loan * months * rate) / 1200)
  const totalOriginalAndInterest = loan + totalInterest
  document.getElementById('interest').value = totalInterest.toLocaleString()
  document.getElementById(
    'originalAndInterest'
  ).value = totalOriginalAndInterest.toLocaleString()
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
        totalInterest - Math.round((loan * rate) / 1200) * (months - 1)
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      html = `
      <td>${i}</td>
      <td>${handlePeriod(period, period[i-1], i)}</td>
      <td>${originalPerMonth.toLocaleString()}</td>
      <td>${interestPerMonth.toLocaleString()}</td>
      <td>${originalAndInterestPerMonth.toLocaleString()}</td>
      <td>0</td>
      `
    } else {
      const originalPerMonth = Math.round(loan / months)
      const interestPerMonth = Math.round((loan * rate) / 1200)
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      const remainingOriginal = loan - originalPerMonth * i
      html = `
      <td>${i}</td>
      <td>${handlePeriod(period, period[i-1], i)}</td>
      <td>${originalPerMonth.toLocaleString()}</td>
      <td>${interestPerMonth.toLocaleString()}</td>
      <td>${originalAndInterestPerMonth.toLocaleString()}</td>
      <td>${remainingOriginal.toLocaleString()}</td>
      `
    }
    const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
  }
})
