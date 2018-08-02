import React from 'react';
import { storiesOf } from '_@storybook_react@3.4.8@@storybook/react/dist/client';
import { action } from '_@storybook_addon-actions@3.4.8@@storybook/addon-actions/dist';

import BasicTable from '../src/components/basic/BasicTable';
import CustomTextforEmptyData from '../src/components/basic/CustomTextforEmptyData';
import BorderlessTable from '../src/components/basic/BorderlessTable';
import HoverStripedTable from '../src/components/basic/HoverStripedTable';
import LargeColumnTable from '../src/components/basic/LargeColumnTable';
import ScrollTable from '../src/components/basic/ScrollTable';
import SingleColumnTable from '../src/components/basic/SingleColumnTable';

import CustomSortTable from '../src/components/sort/CustomSortTable';
import DefaultSortTable from '../src/components/sort/DefaultSortTable';
import CleanSortedTable from '../src/components/sort/CleanSortedTable';

import Button from '../src/components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'



storiesOf('basic', module)
  .add('basic table', () => (
    <BasicTable />
  ))
  .add('Custom Text for Empty Data', () => (
    <CustomTextforEmptyData />
  ))
  .add('Borderless Table', () => {
    return (<BorderlessTable />)
  })
  .add('Hover, Striped, Condensed Table', () => (
    <HoverStripedTable />
  ))
  .add('Large Table', ()=>(
    <LargeColumnTable />
  ))
  .add('Scroll Table', () => {
    return (<ScrollTable />)
  })
  .add('single column table', () => (
    <SingleColumnTable />
  ))

storiesOf('sort', module)
  .add('Column Sort', () => (
    <CustomSortTable />
  ))
  .add('Default Sort', () => (
    <DefaultSortTable defaultSortOrder="asc" />
  ))
  .add('clean sorted table', () => (
    <CleanSortedTable />
  ))


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   