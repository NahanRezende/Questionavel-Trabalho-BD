import { Request, Response } from 'express';
import { FindAllAnswersService } from 'services/answer/FindAllAnswersService';
import { container } from 'tsyringe';

export class FindAllAnswersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllAnswersService = container.resolve(FindAllAnswersService);

    const answers = await findAllAnswersService.execute();

    return response.json(answers);
  }
}
