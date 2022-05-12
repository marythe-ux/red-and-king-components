import initStoryshots from '@storybook/addon-storyshots';
jest.mock('./styles/GlobalStyles', () => 'GlobalStyles');
initStoryshots();
