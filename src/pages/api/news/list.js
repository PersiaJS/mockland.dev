import { faker } from "@faker-js/faker";

const handler = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const news = new Array(limit).fill(null).map((_, index) => ({
    id: index + 1,
    title: faker.lorem.words(3),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    tags: new Array(3).fill(null).map(() => faker.lorem.words(1)),
    summary: faker.lorem.words(20),
    description: faker.lorem.words(400),
    image: faker.image.image(),
    user: {
      id: faker.datatype.number(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    },
    category: {
      id: faker.datatype.number(),
      name: faker.lorem.words(1),
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    },
  }));

  res.status(200).json({
    data: news,
    page: page,
    limit: limit,
  });
};

export default handler;
