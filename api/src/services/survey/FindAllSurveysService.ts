import { ISurveyDTO } from 'dtos/ISurveyDTO';
import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindAllSurveysService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(): Promise<ISurveyDTO[]> {
    return this.surveyRepository.findAll();
  }
}
