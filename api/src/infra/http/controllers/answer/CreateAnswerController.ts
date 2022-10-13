import { Request, Response } from 'express';
import { CreateAnswerService } from 'services/answer/CreateAnswerService';
import { container } from 'tsyringe';

export class CreateAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { survey_id, answer } = request.body;

    const createAnswerService = container.resolve(CreateAnswerService);

    await createAnswerService.execute(survey_id, answer);

    return response.status(201).send();
  }
}
