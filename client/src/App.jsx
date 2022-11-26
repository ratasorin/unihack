import {Navbar, Navlink} from './components/navbar';
import {Page} from './components/page';
import {Icon} from '@iconify/react';
import {Button} from './components/controls/button';
import {Textbox} from './components/controls/textbox';

function App() {
    return (
        <>
            <Navbar>
                <Navlink>Navlink 1</Navlink>
                <Navlink href="#">Navlink 2</Navlink>
                <Navlink href="#"><Icon icon='ic:baseline-person-outline' className='inline-block align-top' width='24'/>Account</Navlink>
            </Navbar>
            <Page>
                <p>Page content goes here</p>
                <p>The content is centered</p>
                <Button>Start!</Button>
                <Textbox type='text' />
            </Page>
        </>
    );
}

export default App
