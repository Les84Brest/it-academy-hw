"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';
import Button from "../components/Button";

test('MobileClient удаление клиента', () => {
  // исходные данные для рендера компонента
  const data = {

      "company": "MTS",
      "lastName": "Безустанный",
      "firstName": "Константин",
      "secondName": "Константинович",
      "balanse": -8.5,
      "id": 125,
      "status": "blocked"
    
  }
  // создаем экземпляр компонента для теста
  const component = renderer.create(
    <MobileClient clientInfo={data} />
  );

  let componentTree =  component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  let btnDeleteClient = component.root.find(el => el.props.children == "Удалить");
  
  expect(btnDeleteClient.props.onClick()).toBe(125);


});