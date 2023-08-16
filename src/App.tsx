import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './Heading';
import Oscar from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Style Props/Container';
import { ThemeContextProvider } from './components/contexthook/ThemeContext';
import { UserContextProvider } from './components/contexthook/UserContext';
import { Box } from './components/contexthook/Box';
import { User } from './components/contexthook/User';
import { MutableRef } from './components/ref hook/MutableRef';
import { DomRef } from './components/ref hook/DomRef';
import { Counter } from './components/classComponents/index';
import { Private } from './components/auth-component-prop/Private';
import { Profile } from './components/auth-component-prop/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction-with-never';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html-wrapping/Button';
import ExtractingaComponentPropType from './components/Extracting a Component Props';
import {Text} from './components/polymorphic/Text';
function App() {

  //Sending an object as a prop in Person
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  //Sending an array of objects in PersonList
  const nameList = [
    { first: 'Bruce', last: "Wayne" },
    { first: 'Tony', last: "Stark" },
    { first: 'Thor', last: "Odinson" },
  ]

  return (
    <div className="App">
      <Greet name='Chetan' messageCount={6} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />

      {/* Sending a string as children */}
      <Heading> Adfar Sir</Heading>

      {/* Sending a react Component as children */}
      <Oscar>


        <Heading>Oscar goes to Leonardo di Caprio </Heading>
      </Oscar>

      {/* Sending Events */}
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />

      <Input value='' handleChange={event => console.log(event)} />

      {/* Style Props */}
      <Container styles={{
        border: "1px solid blue", padding: "1rem",
        marginTop: "1rem"
      }} />

      {/* useContext API */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>


      {/* useRef */}

      <DomRef />
      <MutableRef />

      {/* Class Components */}
      <Counter message='The count value is ' />

      {/* Component Prop */}
      <Private isLoggedIn={true} Component={Profile} />

      {/* Generic Types */}
      <List
        // items={['Batman', 'Spiderman', 'Wonder Woman']}
        items={[{
          id: 1,
          first: 'chetan'
        }, {
          id: 2,
          first: 'thakur'
        }]}
        // items={[1,2,4]} can be number of objects as well
        onClick={(item) => console.log(item)} />


      {/* Restricted Props using Never */}
      <RandomNumber value={1200} isPositive={true} />

      {/* Template Literals */}
      <Toast position='center-top' />

      {/* Writing HTML Wrapping not so important*/}
      <CustomButton variant='primary' onClick={() => console.log('Button Clicked')}>
        Primary Button
      </CustomButton>

      {/* Getting a props of a component which are not exported   */}
      <ExtractingaComponentPropType name='Chetan' messageCount={6} isLoggedIn={true}/>

      {/* Polymorphic Component that is as in this case that checks the semantics and behave accordingly*/}
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>

    </div>

  );
}

export default App;
