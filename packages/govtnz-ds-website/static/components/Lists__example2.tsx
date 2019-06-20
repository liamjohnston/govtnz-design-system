// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';import Li from '@govtnz/ds/build/react-ts/Li.tsx';import Ol from '@govtnz/ds/build/react-ts/Ol.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <Ul {...onChangeGenerator(Ul)} bulleted>
            <Li {...onChangeGenerator(Li)}>Unordered item one</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item two</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item three
                <Ol {...onChangeGenerator(Ol)}>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                </Ol>
            </Li>
            <Li {...onChangeGenerator(Li)}>Unordered item four</Li>
        </Ul>
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
    