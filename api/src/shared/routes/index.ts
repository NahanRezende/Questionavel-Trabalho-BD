import { surveyRouter } from 'infra/http/routes/survey.routes';
import { Router } from 'express';
import { answerRouter } from 'infra/http/routes/answer.routes';

const router = Router();

router.use('/survey', surveyRouter);
router.use('/answer', answerRouter);

export { router };
