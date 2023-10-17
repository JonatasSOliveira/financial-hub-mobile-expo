export default class User {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getRaw(): { email: string; password: string } {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
