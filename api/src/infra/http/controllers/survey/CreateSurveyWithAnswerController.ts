import { Request, Response } from 'express';
import { CreateSurveyWithAnswerService } from 'services/survey/CreateSurveyWithAnswerService';
import { container } from 'tsyringe';

export class CreateSurveyWithAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const survey = request.body;

    const createSurveyWithAnswerService = container.resolve(
      CreateSurveyWithAnswerService,
    );

    console.log(survey);

    await createSurveyWithAnswerService.execute(survey);

    return response.status(201).send();
  }
}
