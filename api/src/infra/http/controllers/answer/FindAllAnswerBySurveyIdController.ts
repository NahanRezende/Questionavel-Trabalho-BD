import { Request, Response } from 'express';
import { FindAllAnswersBySurveyIdService } from 'services/answer/FindAllAnswersBySurveyIdService';
import { container } from 'tsyringe';

export class FindAllAnswerBySurveyIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAllAnswersBySurveyIdService = container.resolve(
      FindAllAnswersBySurveyIdService,
    );

    const answers = await findAllAnswersBySurveyIdService.execute(Number(id));

    return response.json(answers);
  }
}
