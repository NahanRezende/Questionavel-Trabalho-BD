import { IAnswerDTO } from 'dtos/IAnswerDTO';

export interface IAnswerRepository {
  create(survey_id: string, answer: string): Promise<void>;
  findAll(): Promise<IAnswerDTO[]>;
  findAllAnswersBySurveyId(id: number): Promise<IAnswerDTO[]>;
  findById(id: number): Promise<IAnswerDTO>;
  delete(id: number): Promise<void>;
  updateAnswer(answer: IAnswerDTO): Promise<void>;
}
