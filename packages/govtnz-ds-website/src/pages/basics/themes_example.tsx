// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import basics__themes_example from '../../commons/examples/basics__themes_example';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><ExampleContainer>
    <Example  code={basics__themes_example[0]} iframeProps={{
        id:"iframe_basicsthemes_example0",
        className: "example__iframe",
        src:"/basics/themes_example__example0.html",
        title:"Example: Header containing a MainNav",
        height: 328
      }}></Example>
</ExampleContainer>
</React.Fragment>

export default function Code(props) {
  return (
    <BasicsPage
      title={"themes_example"}
      id={"themes_example"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}