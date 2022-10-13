import { Request, Response } from 'express';
import { UpdateAnswerCountService } from 'services/answer/UpdateAnswerCountService';
import { container } from 'tsyringe';

export class UpdateAnswerCountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateAnswerCountService = container.resolve(
      UpdateAnswerCountService,
    );

    await updateAnswerCountService.execute(Number(id));

    return response.status(201).send();
  }
}
