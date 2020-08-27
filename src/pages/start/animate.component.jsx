import React, { useEffect, useState, useRef } from "react";
import { Animate, HeaderText, Text } from './startpage.styles';

const AnimateComponent = ({ show, children }) => {
  const animateRef = useRef();
  const [render, setRender] = useState(show);

  useEffect(() => {
    const classesOld = animateRef.current.classList;
    let classes1 = Object.values(classesOld);
    animateRef.current.classList.remove(...classes1);
    void animateRef.current.offsetWidth;
    animateRef.current.classList.add(...classes1);
    if (show) setRender(true);
  }, [children]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <>
        <Animate ref={animateRef} show={show} onAnimationEnd={onAnimationEnd}>
          <HeaderText>{children.header}</HeaderText>
          <Text>{children.text}</Text>
        </Animate>
       </>
    )
  );
};

export default AnimateComponent;