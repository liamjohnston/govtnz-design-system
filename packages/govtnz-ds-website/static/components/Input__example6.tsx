// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <InputBlock {...onChangeGenerator(InputBlock)} type="Text" label="Event name" hint="The name you'll use on promotional material" name="anyName" inputId="anyId2f" hintId="anyHintId2" errorId="anyErrorId2Error" hasError error="Enter a known event name" />
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
    