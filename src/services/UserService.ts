import { supabase } from "../libs/supabase";
import User from "../models/User";

export class UserService {
  async signUp(user: User): Promise<void> {
    const result = await supabase.auth.signUp(user.getRaw());
    console.log(result);
  }

  async signIn(email: string, password: string): Promise<void> {
    const result = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(result);
  }
}
