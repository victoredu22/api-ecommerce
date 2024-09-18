import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10; // Número de rondas de generación del salt
    const salt = await bcrypt.genSalt(saltRounds); // Generar un salt
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt); // Cifrar la contraseña

    const newUser = {
      ...createUserDto,
      password: hashedPassword,
    };

    const user = await this.userModel.create(newUser);
    return user.save();
  }

  async findAll() {
    const users = this.userModel.find();

    return users;
  }

  async findOne(id: number) {
    const user = await this.userModel.findOne({ where: { id: id } });
    if (user) {
      return user;
    }
    throw new NotFoundException('user not found');
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  remove(id: number) {
    return this.userModel.findByIdAndDelete(id);
  }
}
