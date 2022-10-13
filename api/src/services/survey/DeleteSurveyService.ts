import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteSurveyService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(id: number): Promise<void> {
    this.surveyRepository.delete(id);
  }
}
