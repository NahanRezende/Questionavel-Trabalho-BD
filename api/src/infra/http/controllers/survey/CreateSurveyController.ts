import { Request, Response } from 'express';
import { CreateSurveyService } from 'services/survey/CreateSurveyService';
import { container } from 'tsyringe';

export class CreateSurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { survey_question } = request.body;

    const createSurveyService = container.resolve(CreateSurveyService);

    await createSurveyService.execute(survey_question);

    return response.status(201).send();
  }
}
