"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import Button from "../components/Button";
import MobileClient from '../components/MobileClient';
import mobileEvents from '../components/mobileEvents';

test('MobileCompany фильтр: показать активных', () => {
  // исходные данные для рендера компонента
  const data = [{
    "company": "MTS",
    "lastName": "Маховицкий",
    "firstName": "Эрнест",
    "secondName": "Афанасиевич",
    "balanse": 10.55,
    "id": 105,
    "status": "active"
  },
  {
    "company": "MTS",
    "lastName": "Набойщикова",
    "firstName": "Лиана",
    "secondName": "Агафоновна",
    "balanse": -3.5,
    "id": 125,
    "status": "blocked"
  },]
  // создаем экземпляр компонента для теста
  const component = renderer.create(
    <MobileClient clients={data} />
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
  let btn = component.root.find(el => {
    return el.props.children == "Активные";
  });
  
  btn.props.onClick();

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();



});