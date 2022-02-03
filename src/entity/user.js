import { COLUMNS } from '../tools/constants'

class User {
  constructor ({ id, name, email, username, address: _address }) {
    this.id = id ** 2
    this.name = name
    this.email = email
    this.username = username
    this._address = _address

    // this.remove = this.remove.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street} ${this._address.suite}`
  }

  remove () {
    console.log(this)
    document.getElementById(`tr-${this.id}`).remove()
  }

  renderAction () {
    const td = document.createElement('td')
    td.textContent = 'x'
    td.style.color = 'red'
    td.style.padding = '5px'
    td.style.cursor = 'pointer'
    td.addEventListener('click', this.remove.bind(this))

    // td.addEventListener('click', event => {
    //   event.target.parentElement.remove()
    // })

    return td
  }

  render () {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `tr-${this.id}`)

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]
      tr.appendChild(td)
    })

    tr.appendChild(this.renderAction())

    return tr
  }
}

export default User
