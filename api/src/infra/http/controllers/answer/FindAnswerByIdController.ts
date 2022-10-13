import { Request, Response } from 'express';
import { FindAnswerByIdService } from 'services/answer/FindAnswerByIdService';
import { container } from 'tsyringe';

export class FindAnswerByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAnswerByIdService = container.resolve(FindAnswerByIdService);

    const answer = await findAnswerByIdService.execute(Number(id));

    return response.json(answer);
  }
}
