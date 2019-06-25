import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { styles } from '../src/components/styles/scaffolding';
import mock from './mock';

import Navbar from '../src/components/Navbar';
import List from '../src/components/List';
import Item from '../src/components/Item';
import Details from '../src/components/Details';

storiesOf('Layout', module)
.add('Navbar', () => <styles.panel><Navbar onToggleMenu={ action('toggle-menu') } onNavigateBack={ action('back') }  /></styles.panel>)
.add('Navbar in details', () => <styles.panel><Navbar level={1} onToggleMenu={ action('toggle-menu') } onNavigateBack={ action('back') }  /></styles.panel>)

storiesOf('List', module)
.add('Items', () => <List items={mock['list']} position={mock['position']} />)
.add('Single item', () => <styles.panel><Item key={'1'} item={mock['details']} /></styles.panel>)

storiesOf('Details', module)
.add('Castle with full info', () => <Details item={mock['details']} position={mock['position']} />)
