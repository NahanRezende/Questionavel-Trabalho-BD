import { Router } from 'express';
import { CreateAnswerController } from '../controllers/answer/CreateAnswerController';
import { DeleteAnswerController } from '../controllers/answer/DeleteAnswerController';
import { FindAllAnswersController } from '../controllers/answer/FindAllAnswersController';
import { FindAnswerByIdController } from '../controllers/answer/FindAnswerByIdController';
import { FindAllAnswerBySurveyIdController } from '../controllers/answer/FindAllAnswerBySurveyIdController';
import { UpdateAnswerCountController } from '../controllers/answer/UpdateAnswerCountController';

const answerRouter = Router();

const findAllAnswersController = new FindAllAnswersController();
const findAnswerByIdController = new FindAnswerByIdController();
const createAnswerController = new CreateAnswerController();
const updateAnswerCountController = new UpdateAnswerCountController();
const deleteAnswerController = new DeleteAnswerController();
const findAllAnswerBySurveyIdController =
  new FindAllAnswerBySurveyIdController();

answerRouter.get('/', findAllAnswersController.handle);

answerRouter.get('/:id', findAnswerByIdController.handle);

answerRouter.get('/all/:id', findAllAnswerBySurveyIdController.handle);

answerRouter.post('/', createAnswerController.handle);

answerRouter.put('/:id', updateAnswerCountController.handle);

answerRouter.delete('/:id', deleteAnswerController.handle);

export { answerRouter };
