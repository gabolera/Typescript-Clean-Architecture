import crypto from 'crypto'
export class User {
  private showPass: boolean = false
  constructor(private props: UserProps) {
    props.id = props.id ?? crypto.randomUUID()
  }

  public get id(): String {
    return this.props.id ?? ''
  }

  public get name(): String {
    return this.props.name
  }

  public get email(): String {
    return this.props.email
  }

  public get password(): String {
    return this.props.password ?? ''
  }

  public get getPassword(): String | null {
    return this.password
  }

  getProps(): Omit<UserProps, 'password'> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    }
  }
}

export type UserProps = {
  id?: String
  name: String
  email: String
  password?: String
}
