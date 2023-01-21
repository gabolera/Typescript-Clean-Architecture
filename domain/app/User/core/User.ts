import crypto from 'crypto'
export class User {
  constructor(private props: UserDefaultProps) {
    props.id = props.id ?? crypto.randomUUID()
  }

  public get id(): String | null {
    return this.props.id ?? null
  }

  public get name(): String {
    return this.props.name
  }

  public get email(): String {
    return this.props.email
  }

  public get password(): String {
    return this.props.password
  }

  getProps(): UserDefaultProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }
}

interface UserDefaultProps {
  id?: String | null
  name: String
  email: String
  password: String
}
