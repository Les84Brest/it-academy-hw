"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import Button from "../components/Button";
import MobileClient from '../components/MobileClient';
import mobileEvents from '../components/mobileEvents';

test('MobileCompany добавление нового клиента', () => {
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

  const newClient = {
    "company": "MTS",
    "lastName": "Ветошников",
    "firstName": "Тимур",
    "secondName":  "Андреевич",
    "balanse": 1,
    "id": 9999,
    "status": "active"
  }
  // создаем экземпляр компонента для теста
  const component = renderer.create(
    <MobileCompany companyData={data} />
  );

  let componentTree =  component.toJSON();
  expect(componentTree).toMatchSnapshot();
// Эмулируем событие добавления клиента
// component.
  mobileEvents.emit('savingClient', newClient);
  // снэпшот с одним клиентом
  componentTree =  component.toJSON();
  expect(componentTree).toMatchSnapshot();
});