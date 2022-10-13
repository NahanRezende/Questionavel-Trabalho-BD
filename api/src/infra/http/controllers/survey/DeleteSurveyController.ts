import { Request, Response } from 'express';
import { DeleteSurveyService } from 'services/survey/DeleteSurveyService';
import { container } from 'tsyringe';

export class DeleteSurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSurveyService = container.resolve(DeleteSurveyService);

    await deleteSurveyService.execute(Number(id));

    return response.status(202).send();
  }
}
