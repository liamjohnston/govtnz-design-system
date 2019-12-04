// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';import H1 from '@govtnz/ds/build/react-ts/H1';import CheckboxBlock from '@govtnz/ds/build/react-ts/CheckboxBlock';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Checkboxes with hints" {...onChangeGenerator({})}>
        <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle3" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId3" {...onChangeGenerator({})}>
            <CheckboxBlock label="Aardvark Access" checkboxId="anyCheckboxId31" value="provider1" name="providerChoice3" labelId="labelId31" hintId="hintId31" hint="Aardvark Access provides internet" {...onChangeGenerator({"value":"provider1"})}></CheckboxBlock>
            <CheckboxBlock label="Bumblebee Business" checkboxId="anyCheckboxId32" value="provider2" name="providerChoice3" labelId="labelId32" hintId="hintId32" hint="Bumblebee Business provides electricity" {...onChangeGenerator({"value":"provider2"})}></CheckboxBlock>
            <CheckboxBlock label="Caterpillar Company" checkboxId="anyCheckboxId33" value="provider3" name="providerChoice3" labelId="labelId33" hintId="hintId33" hint="Caterpillar Company provides telephone" {...onChangeGenerator({"value":"provider3"})}></CheckboxBlock>
        </FieldsetBlock>
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
      