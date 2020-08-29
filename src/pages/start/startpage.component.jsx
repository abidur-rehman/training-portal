import React, { useState, useEffect, useRef } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import CollectionPageContainer from '../collection/collection.container';
import AnimateComponent from './animate.component';

import {
  InfoContainer,
  TextContainer,
  LinkContainer,
  LinkItem,
  HomePageContainer } from './startpage.styles';
import { useSelector } from 'react-redux';
import SidebarComponent from '../../components/sidebar/sidebar.component';

const StartPage = () => {
  const data = useSelector(state => state.start.data);
  const [show, setShow] = useState(true);
  const [fields, setFields] = useState(data);
  const [item, setItem] = useState(fields[0]);
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();

  const arrRefs = [oneRef, twoRef, threeRef, fourRef, fiveRef, sixRef];
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= 1 ) {
        let elementPre = arrRefs[i-1].current;
        elementPre.classList.remove('blackBackground');
        elementPre.classList.add('greyBackground');
      }
      if (i === 0) {
        let elementPre = arrRefs[arrRefs.length - 1].current;
        elementPre.classList.remove('blackBackground');
      }
      let element = arrRefs[i].current;
      element.click();
      element.classList.add('blackBackground');
      i++;
      if (i >= arrRefs.length ) {
        i = 0;
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (item, index) => e => {
    item.value = !item.value;
    let newArr = [...fields];
    newArr[index] = item;
    setFields(newArr);
    setItem(item);
    setShow(true);
  }
  return (
    <div>
      <Header/>
      <SidebarComponent/>
      <InfoContainer>
        <LinkContainer>
          {
            fields.map((item, index) => {
              return <LinkItem ref={arrRefs[index]} key={index} onClick={handleClick(item, index)}></LinkItem>
            })
          }
        </LinkContainer>
        <AnimateComponent show={show}>
          {item}
        </AnimateComponent>
      </InfoContainer>
      <TextContainer>
        With over 5000 candidates trained worldwide and still counting, a greater percentage of them are using our resources to pass their business analysis and Agile certifications, and improving their performance in the business environment.
        This is the place for you to train as an Agile business analyst and collaborate with professionals in the project delivery environment to gain the voice for the profession. We are here at every level of your career providing the environment,
        collaborations, resources, and information to manage and advance your career towards a safe and secure future.
      </TextContainer>
      <HomePageContainer>
        <CollectionPageContainer/>
      </HomePageContainer>
    <Footer/>
    </div>
  )
};

export default StartPage;
