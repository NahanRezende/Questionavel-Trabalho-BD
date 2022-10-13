import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { AnswerRepository } from 'infra/repositories/implementations/AnswerRepository';
import { SurveyRepository } from 'infra/repositories/implementations/SurveyRepository';
import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { container } from 'tsyringe';

container.registerSingleton<ISurveyRepository>(
  'SurveyRepository',
  SurveyRepository,
);

container.registerSingleton<IAnswerRepository>(
  'AnswerRepository',
  AnswerRepository,
);
