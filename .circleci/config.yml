version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:13.8.0
    steps:
      - checkout
      - run: npm i
      - run: npm run lint
  test:
    docker:
      - image: circleci/node:13.8.0
    steps:
      - checkout
      - run: npm i
      - run: npm run test
  analyze:
    docker:
      - image: circleci/node:13.8.0
    steps:
      - checkout
      - run: npm audit

workflows:
  my_workflow:
    jobs:
      - build
      - test:
          requires:
            - build
      - analyze:
          requires:
            - test
