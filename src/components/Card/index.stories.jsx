import React from 'react';

import { Card } from '.';

export default {
  title: 'UI/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  book: {
    authors: 'Sra. Fabrício Santos, Larissa Carvalho',
    imageUrl: 'https://files-books.ioasys.com.br/Book-3.jpg',
    pageCount: 1645,
    published: 2012,
    publisher: 'Pereira S.A.',
    title: 'Ad',
  },
};
