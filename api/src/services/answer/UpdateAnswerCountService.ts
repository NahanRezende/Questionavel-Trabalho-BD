import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateAnswerCountService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(id: number) {
    const answer = await this.answerRepository.findById(id);

    answer.answer_count += 1;

    await this.answerRepository.updateAnswer(answer);
  }
}
