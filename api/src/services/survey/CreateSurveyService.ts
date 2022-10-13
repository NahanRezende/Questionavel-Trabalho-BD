import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateSurveyService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(survey_question: string): Promise<void> {
    this.surveyRepository.create(survey_question);
  }
}
