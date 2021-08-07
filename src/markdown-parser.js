import React from 'react';
import MDX from '@mdx-js/runtime'

const makeParser = ({ components = {}, scope = {} }) => {
  return (text, mdxOptions) => {
    // const result = await mdx(text, mdxOptions);
    // TODO: Research best method for performance

    return (
      <MDX components={components} scope={scope} children={text} />
    );
  }
};

export default makeParser;
