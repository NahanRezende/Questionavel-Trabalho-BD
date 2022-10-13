import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateAnswerService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(survey_id: string, answer: string): Promise<void> {
    this.answerRepository.create(survey_id, answer);
  }
}
