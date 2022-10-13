import { Request, Response } from 'express';
import { DeleteAnswerService } from 'services/answer/DeleteAnswerService';
import { container } from 'tsyringe';

export class DeleteAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAnswerService = container.resolve(DeleteAnswerService);

    await deleteAnswerService.execute(Number(id));

    return response.status(202).send();
  }
}
