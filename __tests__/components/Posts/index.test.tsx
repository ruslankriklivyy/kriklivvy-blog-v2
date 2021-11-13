import React from 'react';
import { render, screen } from '@testing-library/react';

import Posts from '../../../components/Posts';
import { IPostResponse } from '../../../interfaces/interfaces';

let mockPostsProps: IPostResponse[] = [];

beforeAll(() => {
  mockPostsProps = [
    {
      slug: '',
      frontmatter: {
        id: '1',
        date: '2021',
        poster: '',
        title: 'test',
        category: 'test',
        description: 'test',
        mainColor: 'test',
        categoryColor: 'test',
        categoryLink: 'test',
        type: 'test',
      },
    },
  ];
});

describe('Posts', () => {
  it('post item render', () => {
    render(<Posts posts={mockPostsProps} />);
    expect(screen.findByText('2021')).toBeTruthy();
  });
});
