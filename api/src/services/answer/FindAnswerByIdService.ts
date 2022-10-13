import { IAnswerDTO } from 'dtos/IAnswerDTO';
import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindAnswerByIdService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(id: number): Promise<IAnswerDTO> {
    return this.answerRepository.findById(id);
  }
}
