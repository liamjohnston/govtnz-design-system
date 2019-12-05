// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';
import components__Radios from '../../commons/examples/components__Radios';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">Radio buttons present users a choice of options from which they can select only one.</P>

<H2 styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Radios[0]} iframeProps={{
        id:"iframe_componentsRadios0",
        className: "example__iframe",
        src:"/components/Radios__example0.html",
        title:"Example: Radio buttons",
        height: 317
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example  code={components__Radios[1]} iframeProps={{
        id:"iframe_componentsRadios1",
        className: "example__iframe",
        src:"/components/Radios__example1.html",
        title:"Example: Error state #1 (Radio buttons)",
        height: 319
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Use the radio buttons component when users can only select one option from a list.</p>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>Do not use the radio buttons component if users might need to select more than one option. Use the checkboxes component instead.</p>
<h2 id="how-it-works">How it works</h2>
<p>Radio buttons are grouped together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.</p>
<p>If you are asking just one question per page, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading.</p>
<p>Always position radio buttons to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.</p>
<p>Unlike with checkboxes, users can only select one option from a list of radio buttons. Do not assume that users will know how many options they can select based on the visual difference between radio buttons and checkboxes alone. If needed, add a hint explaining this, like ‘Select one option’.</p>
<p>Do not pre-select radio button options. Pre-selecting radio button options makes it more likely that users will:</p>
<Ul bulleted>
<Li>not realise they’ve missed a question</Li>
<Li>submit the wrong answer.</Li>
</Ul>
<p>Be aware that, once users have selected one option, they have to refresh their browser window to go back to having no option selected. To avoid this, include ‘None of the above’ or ‘I do not know’, if they are valid options.</p>
<p>Order radio button options alphabetically by default.</p>
<p>In some cases, it can be helpful to order them from most to least common. For example, you could order options for ‘Where do you live?’ based on population size.</p>
<p>Another example of pre-selected ordering is listing options chronologically. For example, you could order available appointment times in a day from earliest to latest.</p>
<p>However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.</p>
<ExampleContainer>
    <ExampleHeading>Stacked radio buttons</ExampleHeading>
    <Example  code={components__Radios[2]} iframeProps={{
        id:"iframe_componentsRadios2",
        className: "example__iframe",
        src:"/components/Radios__example2.html",
        title:"Example: Stacked radio buttons",
        height: 380
      }}></Example>
</ExampleContainer>

<p>When there are more than 2 options, radio buttons should be stacked.</p>
<ExampleContainer>
    <ExampleHeading>Inline radio buttons</ExampleHeading>
    <Example  code={components__Radios[3]} iframeProps={{
        id:"iframe_componentsRadios3",
        className: "example__iframe",
        src:"/components/Radios__example3.html",
        title:"Example: Inline radio buttons",
        height: 279
      }}></Example>
</ExampleContainer>

<p>If there are only 2 options, you can either stack the radio buttons or display them inline.</p>
<ExampleContainer>
    <ExampleHeading>Radio button items with hints</ExampleHeading>
    <Example  code={components__Radios[4]} iframeProps={{
        id:"iframe_componentsRadios4",
        className: "example__iframe",
        src:"/components/Radios__example4.html",
        title:"Example: Radio button items with hints",
        height: 463
      }}></Example>
</ExampleContainer>

<p>You can add hints to radio button items to provide more information about the options.</p>
<ExampleContainer>
    <ExampleHeading>Radio button items with a text divider</ExampleHeading>
    <Example  code={components__Radios[5]} iframeProps={{
        id:"iframe_componentsRadios5",
        className: "example__iframe",
        src:"/components/Radios__example5.html",
        title:"Example: Radio button items with a text divider",
        height: 511
      }}></Example>
</ExampleContainer>

<p>If one or more of your radio button options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.</p>
<h2 id="error-messages">Error messages</h2>
<p>Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.</p>
<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example  code={components__Radios[6]} iframeProps={{
        id:"iframe_componentsRadios6",
        className: "example__iframe",
        src:"/components/Radios__example6.html",
        title:"Example: Error state #2 (Radio buttons)",
        height: 319
      }}></Example>
</ExampleContainer>

<h4 id="if-nothing-is-selected-and-the-options-are-yes-or-no">If nothing is selected and the options are ‘yes’ or ‘no’</h4>
<p>Say ‘Select ‘yes’ if [whatever it is] is true’. For example, ‘Select ‘yes’ if Sarah normally lives with you’.</p>
<h4 id="if-nothing-is-selected-and-the-question-includes-options">If nothing is selected and the question includes options</h4>
<p>Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.</p>
<h4 id="if-nothing-is-selected-and-the-question-does-not-include-options-h4">If nothing is selected and the question does not include options [H4]</h4>
<p>Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Radios"}
      id={"Radios"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
