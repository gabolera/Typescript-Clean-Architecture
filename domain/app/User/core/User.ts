import crypto from 'crypto'
export class User {
  private showPass: boolean = false
  constructor(private props: UserProps) {
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

  public get password(): String | null {
    return this.props.password ?? null
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
  id?: String | null
  name: String
  email: String
  password?: String | null
}
