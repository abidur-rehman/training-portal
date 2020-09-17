import React, { useState, useEffect, useRef } from 'react'
import { Main, ListItem, DropDownListContainer,
  DropDownContainer, DropDownHeader, DropDownList, Text, ArrowDown } from './select.component.styles';
import { useHistory } from 'react-router-dom';

const CustomSelect = ({ item })  => {
  const history = useHistory();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    history.push({ pathname: '/play', state: { item, selectedOption: value }});
  };

  let options = ["Start from beginning"];

  if (item.progress < 100) {
    options.push("Continue");
  }

  return (
    <Main ref={ref}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <Text>
            {selectedOption || "Review"}
          </Text>
          <ArrowDown/>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default CustomSelect;