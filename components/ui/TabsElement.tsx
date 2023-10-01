"use client"
import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";

const TabsElement = () => {
 return (
  <div className="wrapper flex flex-col">
   <Tabs aria-label="Options">
    <Tab key="photos" title="Вкладка 1">
     <p>Контент першої вкладки</p>
    </Tab>
    <Tab key="music" title="Вкладка 2">
     <p>Контент другої вкладки</p>
    </Tab>
    <Tab key="videos" title="Вкладка 3">
     <p>Контент третьої вкладки</p>
    </Tab>
   </Tabs>
  </div>
 )
}

export default TabsElement