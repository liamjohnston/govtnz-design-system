// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';
import components__FileUpload from '../../commons/examples/components__FileUpload';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import MainNavMobileMenuContext from '../../commons/MainNavMobileMenuContext';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><ExampleContainer>
    <ExampleHeading>Example of File Upload</ExampleHeading>
    <Example  code={components__FileUpload[0]} iframeProps={{
        id:"iframe_componentsFileUpload0",
        className: "example__iframe",
        src:"/components/FileUpload__example0.html",
        title:"Example: File upload",
        height: 168
      }}></Example>
</ExampleContainer>

<H2 styleSize="large" id="credit">Credit</H2>
<P>Guidance, original HTML and CSS derived from <A className="g-link"  href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</A>.</P>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"FileUpload"}
      id={"FileUpload"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
