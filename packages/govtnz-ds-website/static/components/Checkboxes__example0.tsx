// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import CheckboxBlock from '@govtnz/ds/build/react-ts/CheckboxBlock.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle1" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId1">
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Aardvark Access" checkboxId="anyCheckboxId1" value="provider1" name="providerChoice1" labelId="labelId1" />
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Bumblebee Business"  checkboxId="anyCheckboxId2" value="provider2" name="providerChoice1" labelId="labelId2" />
    <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Caterpillar Company"  checkboxId="anyCheckboxId3" value="provider3" name="providerChoice1" labelId="labelId3" />
        </FieldsetBlock>
    </Example>);

    document.addEventListener('DOMContentLoaded', () => {
      const selector = '#root';
      const root = document.querySelector(selector);
      if (!root) {
        console.error("Couldn't find app mount point ", selector);
        return;
      }
      ReactDOM.hydrate(<PageContent />, root, window.afterRender);
    });
    