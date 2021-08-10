import { compiler } from 'markdown-to-jsx';

const makeParser = ({ components = {} }) => {
  return (text, mdxOptions) => {
    return compiler(text, { overrides: components, ...mdxOptions });
  }
};

export default makeParser;
