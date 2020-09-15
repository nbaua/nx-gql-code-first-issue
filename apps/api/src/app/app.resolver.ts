import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver('auth')
export class AppResolver {
  constructor(private authService: AppService) {}

  @Mutation(() => String)
  async login(
    @Args('username') username: string,
    @Args('password') password: string
  ): Promise<String> {
    const token = this.authService.login(username, password);
    return token;
  }

  @Mutation(() => String)
  async register(
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('email') email: string
  ): Promise<String> {
    const token = this.authService.register(username, password, email);
    return token;
  }
}
