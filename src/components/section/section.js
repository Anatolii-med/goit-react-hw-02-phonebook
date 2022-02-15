import React from 'react';
import { SectionWrap } from './section.styled';

class Section extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <SectionWrap>
                <h2>{title}</h2>
                {children}
            </SectionWrap>
        );
    }
}

export default Section;
