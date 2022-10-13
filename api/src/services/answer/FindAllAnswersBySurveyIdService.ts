import { IAnswerDTO } from 'dtos/IAnswerDTO';
import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindAllAnswersBySurveyIdService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(survey_id: number): Promise<IAnswerDTO[]> {
    const answers = await this.answerRepository.findAllAnswersBySurveyId(
      survey_id,
    );

    answers.sort((a, b) => {
      return a.answer < b.answer ? -1 : a.answer > b.answer ? 1 : 0;
    });

    return answers;
  }
}
