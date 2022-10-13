import { ISurveyDTO } from 'dtos/ISurveyDTO';
import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindSurveyByIdService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(id: number): Promise<ISurveyDTO> {
    return this.surveyRepository.findById(id);
  }
}
