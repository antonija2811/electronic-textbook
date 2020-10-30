import React, {Component} from 'react';
import './index.css';
import PocetnaVjezba from './PocetnaVjezba.js';
import Vjezba1 from './Vjezba1.js';
import Vjezba2 from './Vjezba2.js';
import Vjezba3 from './Vjezba3.js';
import Vjezba4 from './Vjezba4.js';
import Vjezba5 from './Vjezba5.js';
import Vjezba6 from './Vjezba6.js';
import Vjezba7 from './Vjezba7.js';
import { Tabs, Card} from 'antd';

const { TabPane } = Tabs;

class Body extends Component {
    render () {
        return (
            <div id="sadrzaj">
                <Card style={{
                    height: '100%',
                    width: '100%',
                }}
                >
                    <Tabs 
                        defaultActiveKey="1"
                        tabPosition="left"
                        style={{
                            textAlign: 'justify',
                        }}
                    >
                        <TabPane tab="O vježbama" key="1">
                            <PocetnaVjezba/>
                        </TabPane>
                        <TabPane tab="Vježba 1" key="2">
                            <Vjezba1/>
                        </TabPane>
                        <TabPane tab="Vježba 2" key="3">
                            <Vjezba2/>
                        </TabPane>
                        <TabPane tab="Vježba 3" key="4">
                            <Vjezba3/>
                        </TabPane>
                        <TabPane tab="Vježba 4" key="5">
                            <Vjezba4/>
                        </TabPane>
                        <TabPane tab="Vježba 5" key="6">
                            <Vjezba5/>
                        </TabPane>
                        <TabPane tab="Vježba 6" key="7">
                            <Vjezba6/>
                        </TabPane>
                        <TabPane tab="Vježba 7" key="8">
                            <Vjezba7/>
                        </TabPane>
                    </Tabs>
                </Card>

            </div>
        );
    };
}

export default Body;