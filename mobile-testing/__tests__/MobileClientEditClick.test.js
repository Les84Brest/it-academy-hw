"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';
import Button from "../components/Button";

test('MobileClient в режим редактирования по кнопке', () => {
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
  
  let btnEdit = component.root.find(el => el.props.children == "Редактировать");
  btnEdit.props.onClick();
  componentTree =  component.toJSON();
  expect(componentTree).toMatchSnapshot();


});