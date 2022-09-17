import React from 'react';
import CobaInlineCSS from './inlineCSS';
import CobaObjectVariableCSS from './objectVariableCSS';
import CobaExternalCSS from './externalCss';
import CobaExternalObjectVariableCSS from './OobjectVariableCSSExternal';
import CobaModuleExternalCSS from './moduleExternal';
import StyledComponent from './StyledComponent';
import About from '../components/about';

function Main() {
  return (
    <>
    <div>
      <CobaInlineCSS />
      <CobaObjectVariableCSS />
      <CobaExternalCSS />
      <CobaExternalObjectVariableCSS />
      <CobaModuleExternalCSS />
      <StyledComponent />
      <About />
    </div>
    </>
  );
}

export default Main;
