import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  create(createPostInput: CreatePostInput) {
    this.posts = [...this.posts, createPostInput];
    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  forAuthor(authorId: string) {
    return this.posts.filter((post) => post.authorId === authorId);
  }
}
