import { Injectable } from '@nestjs/common';
import { Launch } from './entities/launch.entity';
import { Model, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LaunchDto } from 'src/common/dto/launch.dto';

@Injectable()
export class LaunchService {
  constructor(
    @InjectModel(Launch.name)
    private readonly launchModel: Model<Schema>,
  ) {}

  async create(launch: LaunchDto) {
    try {
      const Launch = await this.launchModel.create(launch);

      return Launch;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.launchModel.find().exec();
    } catch (error) {}
  }
}
