import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '@nx-gql-code-first-issue/data-helper';
import { Repository } from 'typeorm';

export class AppService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly authRepository: Repository<AuthEntity>
  ) {}

  async login(username: string, password: string) {
    /* PRETEND TO HAVE SOME LOGIN HAPPENING HERE */
    const ref = await this.authRepository.count();
    return ref.toString();
  }

  async register(username: string, password: string, email: string) {
    /* PRETEND TO HAVE SOME LOGIN HAPPENING HERE */
    const ref = this.authRepository.count();
    return ref.toString();
  }
}
