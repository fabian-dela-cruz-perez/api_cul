import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskCategory } from './entities/task_category.entity';


@Injectable()
export class TaskCategoriesService {
  constructor(
    @InjectRepository(TaskCategory)
    private task_categoryRepository:Repository<TaskCategory>
  ){}

  create(createTaskCategoriesDto: CreateTaskCategoryDto) {
    return this.task_categoryRepository.save(createTaskCategoriesDto);
  }

  findAll() {
    return this.task_categoryRepository.find();
  }

  findOne(id: number) {
    return this.task_categoryRepository.findOneBy({id});
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.task_categoryRepository.update(id,updateTaskCategoryDto);
  }

  remove(id: number) {
    return this.task_categoryRepository.delete(id);
  }
}
