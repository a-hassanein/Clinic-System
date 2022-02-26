import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardAppointment from "./CardAppointment";
import ListAppointment from './ListAppointment';
import {useState} from "react";


const TabAppointment = (props) => {
    const [appointmentsList , setappointmentsList] = useState([])
    

    return (
        <>
        <div className="with-react-tabs">
        <Tabs>
          <TabList>
            <Tab>Sat. </Tab>
            <Tab>Sun. </Tab>
            <Tab>Mon. </Tab>
            <Tab>Tues. </Tab>
            <Tab>Wednes. </Tab>
            <Tab>Thurs. </Tab>
          </TabList>
  
          <TabPanel>
            <div className="tab-content">
              <h2>Tab content 1</h2>
             <ListAppointment appointments={[]} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-content">
              <h2>Tab content 2</h2>
              <p>Here is your tab content. You can separate this as a component.</p>
              <p>Lorem ipsum dolor sit amet ...</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tab-content">
              <h2>Tab content 3</h2>
              <p>Here is your tab content. You can separate this as a component.</p>
              <p>Lorem ipsum dolor sit amet ...</p>
            </div>
          </TabPanel>
        </Tabs>
  
      </div> 
      </>
    )
}


export default TabAppointment;