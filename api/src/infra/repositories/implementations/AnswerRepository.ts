import { IAnswerDTO } from 'dtos/IAnswerDTO';
import { dataSource } from '../config/dataSource';
import { IAnswerRepository } from '../IAnswerRepository';

export class AnswerRepository implements IAnswerRepository {
  private queryRunner;

  constructor() {
    this.queryRunner = dataSource.createQueryRunner();
  }

  async create(survey_id: string, answer: string): Promise<void> {
    await this.queryRunner.query(
      `INSERT INTO answers VALUES ( DEFAULT,'${survey_id}' , '${answer}', DEFAULT, DEFAULT)`,
    );
  }

  async findAll(): Promise<IAnswerDTO[]> {
    return this.queryRunner.query('SELECT * FROM survey s');
  }

  async findAllAnswersBySurveyId(answer_id: number): Promise<IAnswerDTO[]> {
    return this.queryRunner.query(
      `SELECT * FROM answers a WHERE a.survey_id = ${answer_id}`,
    );
  }

  async findById(id: number): Promise<IAnswerDTO> {
    const [answer] = await this.queryRunner.query(
      `SELECT * FROM answers a WHERE a.id = ${id}`,
    );

    return answer;
  }

  async delete(id: number): Promise<void> {
    await this.queryRunner.query(
      `DELETE FROM answers a  WHERE a.survey_id = ${id}`,
    );
  }

  async updateAnswer({
    id,
    survey_id,
    answer,
    answer_count,
  }: IAnswerDTO): Promise<void> {
    await this.queryRunner.query(
      `UPDATE answers set survey_id = '${survey_id}', answer_count = '${answer_count}', answer = '${answer}' where id = '${id}'`,
    );
  }
}
