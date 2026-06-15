import { Routes } from '@angular/router';
import { Posts } from './components/posts/posts';
import { Users } from './components/users/users';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: Posts,
  },
  {
    path: 'users',
    component: Users,
  },
];
