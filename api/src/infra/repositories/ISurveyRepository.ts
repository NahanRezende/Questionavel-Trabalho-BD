import { ISurveyDTO } from 'dtos/ISurveyDTO';

export interface ISurveyRepository {
  create(survey_question: string): Promise<void>;
  findAll(): Promise<ISurveyDTO[] | undefined>;
  findById(id: number): Promise<ISurveyDTO | undefined>;
  delete(id: number): Promise<void>;
  findByQuestion(question: string): Promise<ISurveyDTO>;
}
