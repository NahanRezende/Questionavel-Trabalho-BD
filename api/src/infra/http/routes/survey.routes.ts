import { Router } from 'express';
import { CreateSurveyController } from '../controllers/survey/CreateSurveyController';
import { CreateSurveyWithAnswerController } from '../controllers/survey/CreateSurveyWithAnswerController';
import { DeleteSurveyController } from '../controllers/survey/DeleteSurveyController';
import { FindAllSurveysController } from '../controllers/survey/FindAllSurveysController';
import { FindSurveyByIdController } from '../controllers/survey/FindSurveyByIdController';

const surveyRouter = Router();

const findAllSurveysController = new FindAllSurveysController();
const findSurveyByIdController = new FindSurveyByIdController();
const createSurveyController = new CreateSurveyController();
const createSurveyWithAnswerController = new CreateSurveyWithAnswerController();
const deleteSurveyController = new DeleteSurveyController();

surveyRouter.get('/', findAllSurveysController.handle);

surveyRouter.get('/:id', findSurveyByIdController.handle);

surveyRouter.post('/', createSurveyController.handle);

surveyRouter.post('/complete', createSurveyWithAnswerController.handle);

surveyRouter.delete('/:id', deleteSurveyController.handle);

export { surveyRouter };
