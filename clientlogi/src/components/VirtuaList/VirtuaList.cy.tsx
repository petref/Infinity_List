import VirtuaList from './VirtuaList'
import DataRows from "../../app/page";
import React from 'react';
import { ItemsState } from 'types/types';

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const items = [{index: 0, name: "item 1", description: "i2", price: "i3"}]
    cy.request("/getTableData");
    cy.mount(<VirtuaList 
        totalItems={100}
        itemHeight={80}
        windowHeight={100}
        renderItem={({  index, style, }) => (
          <DataRows 

          />
        )}
    />)
  })
})