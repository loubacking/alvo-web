import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './styled';

interface TagsType {
  tags: string[];
  toggleLyrics: (tagName: string) => void;
}

const Tags = ({ tags, toggleLyrics }: TagsType) => {
  const [selectedTagName, setSelectedTagName] = useState("Letra");

  const selectTag = (tagName: string) => {
    if (tagName !== 'Letra') {
      setSelectedTagName("Cifra");
    } else {
      setSelectedTagName("Letra");
    }
    toggleLyrics(tagName);
  };

  const isSelected = (tag: string) => selectedTagName.includes(tag);

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