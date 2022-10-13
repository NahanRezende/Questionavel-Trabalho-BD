import { Request, Response } from 'express';
import { FindAllSurveysService } from 'services/survey/FindAllSurveysService';
import { container } from 'tsyringe';

export class FindAllSurveysController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllSurveysService = container.resolve(FindAllSurveysService);

    const sueveys = await findAllSurveysService.execute();

    return response.json(sueveys);
  }
}
