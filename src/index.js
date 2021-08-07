import markdownParser from './markdown-parser';

export { markdownParser };

const markdownProcessor = (parser = markdownParser()) => ({
  type: 'postProcessor',
  name: 'react-markdown',
  process(value, key, options, translator) {
    if (!key || !key[0].endsWith('_md')) return value;

    return options.__markdown === false
      ? value
      : parser(value);
  }
});

export default markdownProcessor;