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
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle3" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId3">
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Aardvark Access" checkboxId="anyCheckboxId31" value="provider1" name="providerChoice3" labelId="labelId31" hintId="hintId31" hint="Aardvark Access provides internet" />
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Bumblebee Business"  checkboxId="anyCheckboxId32" value="provider2" name="providerChoice3" labelId="labelId32" hintId="hintId32" hint="Bumblebee Business provides electricity" />
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Caterpillar Company"  checkboxId="anyCheckboxId33" value="provider3" name="providerChoice3" labelId="labelId33" hintId="hintId33" hint="Caterpillar Company provides telephone" />
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
    