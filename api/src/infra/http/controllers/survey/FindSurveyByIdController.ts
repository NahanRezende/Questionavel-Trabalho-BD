import { Request, Response } from 'express';
import { FindSurveyByIdService } from 'services/survey/FindSurveyByIdService';
import { container } from 'tsyringe';

export class FindSurveyByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findSurveyByIdService = container.resolve(FindSurveyByIdService);

    const survey = await findSurveyByIdService.execute(Number(id));

    return response.json(survey);
  }
}
