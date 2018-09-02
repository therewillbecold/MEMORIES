import React from 'react';
import ReactDOM from 'react-dom';
import { Button, WhiteSpace, NavBar, Icon, Accordion, List } from 'antd-mobile';
import './manage.scss';

class Manage extends React.Component {
    render() {
        return <div className='manage'>
            <h1>MEMORIES</h1>

            <WhiteSpace />

            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
            ><span className="mng">Manage your passwords</span></NavBar>

            <WhiteSpace />

            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
            </Accordion>
        </div>
    }
}

export default Manage