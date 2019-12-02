// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';import H1 from '@govtnz/ds/build/react-ts/H1';import Radios from '@govtnz/ds/build/react-ts/Radios';import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Inline radio buttons" {...onChangeGenerator({})}>
        <FieldsetBlock legend={<H1 styleSize="large" id="nameChangeId6">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId2221" {...onChangeGenerator({})}>
            <Radios inline {...onChangeGenerator({})}>
                <RadioBlock label="Yes" radioId="anyRadioId55" value="true" name="nameChange1" labelId="labelId1" hintId="hintId2221" {...onChangeGenerator({"value":"true"})}></RadioBlock>
                <RadioBlock label="No" radioId="anyRadioId2551" value="false" name="nameChange1" labelId="labelId2" hintId="hintId2221" {...onChangeGenerator({"value":"false"})}></RadioBlock>
            </Radios>
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
      