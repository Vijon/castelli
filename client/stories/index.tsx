import React from 'react';
import { Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { history } from '../src/store/store';
import { styles } from '../src/components/styles/scaffolding';
import mock from './mock';

import Navbar from '../src/components/Navbar';
import List from '../src/components/List';
import Item from '../src/components/Item';
import Details from '../src/components/Details';

storiesOf('Layout', module)
//.add('Navbar', () => <styles.panel><Navbar onToggleMenu={ action('toggle-menu') } onNavigateBack={ action('back') }  /></styles.panel>)
.add('Navbar in details', () => <styles.panel><Navbar level={1} onToggleMenu={ action('toggle-menu') } onNavigateBack={ action('back') }  /></styles.panel>)

storiesOf('List', module)
.add('Items', () => <Router history={history}><List items={mock['list']} position={mock['position']} /></Router>)
.add('Single item', () => <styles.panel><Router history={history}><Item key={'1'} item={mock['details']} /></Router></styles.panel>)

storiesOf('Details', module)
.add('Castle with full info', () => <Details item={mock['details']} position={mock['position']} />)
