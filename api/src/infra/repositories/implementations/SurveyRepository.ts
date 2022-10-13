import { ISurveyDTO } from 'dtos/ISurveyDTO';
import { QueryRunner } from 'typeorm';
import { dataSource } from '../config/dataSource';
import { ISurveyRepository } from '../ISurveyRepository';

export class SurveyRepository implements ISurveyRepository {
  private queryRunner: QueryRunner;

  constructor() {
    this.queryRunner = dataSource.createQueryRunner();
  }

  async create(survey_question: string): Promise<void> {
    return this.queryRunner.query(
      `INSERT INTO survey VALUES (DEFAULT , '${survey_question}', DEFAULT)`,
    );
  }

  async findAll(): Promise<ISurveyDTO[]> {
    return this.queryRunner.query('SELECT * FROM survey s');
  }

  async findById(id: number): Promise<ISurveyDTO> {
    const [survey] = await this.queryRunner.query(
      `SELECT * FROM survey s WHERE s.id = ${id}`,
    );

    return survey;
  }

  async delete(id: number): Promise<void> {
    const [survey] = await this.queryRunner.query(
      `DELETE FROM survey s WHERE s.id = ${id}`,
    );

    return survey;
  }

  async findByQuestion(question: string): Promise<ISurveyDTO> {
    const [survey] = await this.queryRunner.query(
      `SELECT * FROM survey s WHERE s.question = '${question}'`,
    );

    return survey;
  }
}
