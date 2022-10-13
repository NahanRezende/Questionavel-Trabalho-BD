import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

interface IAnswer {
  answer: string;
}

interface ISurveyWithAnswer {
  question: string;
  answers: IAnswer[];
}

@injectable()
export class CreateSurveyWithAnswerService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute({ question, answers }: ISurveyWithAnswer): Promise<void> {
    console.log({ question, answers });

    await this.surveyRepository.create(question);

    const survey = await this.surveyRepository.findByQuestion(question);

    answers.forEach(async answer => {
      await this.answerRepository.create(String(survey.id), answer.answer);
    });
  }
}
