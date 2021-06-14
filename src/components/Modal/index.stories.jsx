import React from 'react';

import { Modal } from '.';

export default {
  title: 'UI/Modal',
  component: Modal,
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  book: {
    authors: 'Sra. Fabrício Santos, Larissa Carvalho',
    category: 'Folclore',
    description:
      'Possimus veritatis voluptatem. Rerum consequatur quia dolorem totam. Et error itaque quia.\n \rFugiat accusamus optio sint alias. Quibusdam aut distinctio voluptatibus. Nihil repellendus velit non.',
    imageUrl: 'https://files-books.ioasys.com.br/Book-3.jpg',
    isbn10: '4953114031',
    isbn13: '119-4953114031',
    language: 'Inglês',
    pageCount: 1645,
    published: 2012,
    publisher: 'Pereira S.A.',
    title: 'Ad',
  },
};
