import React from 'react';
import Pocetna from './pocetna';
import Vjezba from './vjezba';
import Kontakt from './kontakt';
import { Tabs, Card } from 'antd';
import './style.css';

const { TabPane } = Tabs;

function App() {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}
    >
      <Card style={{
        height: '100%',
        width: '85vw',
        border: 'none',
      }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{
            textAlign: 'center',
          }}
        >
          <TabPane tab="Početna" key="1">
            <Pocetna/>
          </TabPane>
          <TabPane tab="Vježbe" key="2">
            <Vjezba/>
          </TabPane>
          <TabPane tab="Kontakt" key="3">
            <Kontakt/>
          </TabPane>
        </Tabs>
      </Card>

      <footer style={{
        textAlign: 'center',
        borderTop: '1px solid #ddd5d5a6',
        width: '82vw',
        paddingTop: '15px',
      }}>
        <p>Copyright FESB 2020</p>
      </footer>
    </div>
  );
};

export default App;
