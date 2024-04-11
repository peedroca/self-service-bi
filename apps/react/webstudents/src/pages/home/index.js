import React from "react";
import { Header } from "../../components/header";
import { Card, CardGrid } from "../../components/card";

import Bubble02 from '../../assets/images/Bubble02.png'
import Bubble09 from '../../assets/images/Bubble09.png'
import Bubble11 from '../../assets/images/Bubble11.png'
import Bubble24 from '../../assets/images/Bubble24.png'

export default function Home() {
    return (
        <>
            <Header />

            <CardGrid>
                <Card 
                    title='Workspaces' 
                    description='First package manager built specifically around workspaces, Yarn lets you split your project into sub-components.'
                    image={Bubble02} 
                />
                <Card 
                    title='Stability' 
                    description='Yarn guarantees that installs that work today will keep working the same way in the future.'
                    image={Bubble09} 
                />
                <Card 
                    title='Documentation' 
                    description='Special care is put into our documentation, which we keep improving at every new version.'
                    image={Bubble11} 
                />
                <Card 
                    title='Test' 
                    description='Cardzin'
                    image={Bubble24} 
                />
                <Card 
                    title='Test' 
                    description='Cardzin'
                    image={Bubble24} 
                />
                <Card 
                    title='Test' 
                    description='Cardzin'
                    image={Bubble24} 
                />
            </CardGrid>
        </>
    );
}