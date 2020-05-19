import React from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './quiz-directory.styles';

const QuizDirectory = () => {
    const quizes = useSelector(state => state.quizDirectory.quizes);
    return (
        <DirectoryMenuContainer>
            {quizes.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps} />
            ))}
        </DirectoryMenuContainer>
    );
};

export default QuizDirectory;
