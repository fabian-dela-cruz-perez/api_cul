import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus)
    private task_statusRepository: Repository<TaskStatus>
  ) { }
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.task_statusRepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.task_statusRepository.find();
  }

  findOne(id: number) {
    return this.task_statusRepository.findOneBy({id});
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.task_statusRepository.update(id,updateTaskStatusDto);
  }

  remove(id: number) {
    return this.task_statusRepository.delete(id);
  }
}
