// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlockWithError from '@govtnz/ds/build/react-ts/FieldsetBlockWithError';import H1 from '@govtnz/ds/build/react-ts/H1';import CheckboxBlock from '@govtnz/ds/build/react-ts/CheckboxBlock';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Error state (Checkboxes)" {...onChangeGenerator({})}>
        <FieldsetBlockWithError legend={<H1 styleSize="large" id="providerChoiceTitle2" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId21" errorId="errorId21" error="You must choose at least one provider." {...onChangeGenerator({})}>
            <CheckboxBlock label="Aardvark Access" checkboxId="anyCheckboxId21" value="provider1" name="providerChoice2" labelId="labelId21" {...onChangeGenerator({"value":"provider1"})}></CheckboxBlock>
            <CheckboxBlock label="Bumblebee Business" checkboxId="anyCheckboxId22" value="provider2" name="providerChoice2" labelId="labelId22" {...onChangeGenerator({"value":"provider2"})}></CheckboxBlock>
    <CheckboxBlock label="Caterpillar Company" checkboxId="anyCheckboxId23" value="provider3" name="providerChoice2" labelId="labelId23" {...onChangeGenerator({"value":"provider3"})}></CheckboxBlock>
        </FieldsetBlockWithError>
    </Example>);

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      