import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './styled';

const Tags = ({ tags, toggleLyrics }) => {
  const [selectedTagName, setSelectedTagName] = useState("Letra");

  const selectTag = tagName => {
    if (tagName !== 'Letra') {
      setSelectedTagName("Cifra");
    } else {
      setSelectedTagName("Letra");
    }
    toggleLyrics(tagName);
  };

  const isSelected = tag => selectedTagName.includes(tag);

  return (
    <>
      {tags.map((tag, index) => (
        <Tag
          key={tag + index}
          dark={isSelected(tag)}
          onClick={() => selectTag(tag)}
        >{tag}</Tag>
      ))}
    </>
  );

}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  notifySelectedTagsName: PropTypes.func,
  renderTags: PropTypes.func,
};

export default Tags;