import crypto from 'crypto'
export class User {
  private showPass: boolean = false
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

  public get getPassword(): String {
    return this.password
  }

  getProps(): Omit<UserDefaultProps, 'password'> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    }
  }
}

interface UserDefaultProps {
  id?: String | null
  name: String
  email: String
  password: String
}
