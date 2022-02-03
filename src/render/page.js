import renderHead from './head'
import renderTableHead from './tableHead'
import User from '../entity/user'
import '../assets/css/table.css'
import '../assets/scss/page.scss'

export default function renderPage (users) {
  const root = document.getElementById('root')
  root.appendChild(renderHead())

  const table = document.createElement('table')
  table.setAttribute('border', 1)
  // table.setAttribute('width', '100%')

  table.appendChild(renderTableHead())

  users.forEach(el => {
    const user = new User(el)
    table.appendChild(user.render())
  })

  root.appendChild(table)
}
