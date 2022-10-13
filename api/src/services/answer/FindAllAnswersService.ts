import { IAnswerDTO } from 'dtos/IAnswerDTO';
import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindAllAnswersService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(): Promise<IAnswerDTO[]> {
    return this.answerRepository.findAll();
  }
}
