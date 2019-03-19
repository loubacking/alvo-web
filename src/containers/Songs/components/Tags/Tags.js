import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './styled';

class Tags extends Component {
  state = {
    selectedTagsName: ["Letra"],
  };

  selectTag = (tagName) => {

    if (tagName !== 'Cifra') {
      console.log(tagName)
      this.setState({
        selectedTagsName: ["Letra"]
      })
    } else {
      this.setState({
        selectedTagsName: ["Cifra"]
      })
    }

    this.props.toggleLyrics(tagName);
  };

  isSelected = (tag) => {
    const { selectedTagsName } = this.state;
    return selectedTagsName.includes(tag);
  };

  render() {
    const { tags } = this.props;

    return (
      <Fragment>
          {tags.map((tag, index) => (
            <Tag
              key={tag + index}
              dark={this.isSelected(tag)}
              onClick={() => this.selectTag(tag)}
            >
              {tag}
            </Tag>
          ))}
      </Fragment>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  notifySelectedTagsName: PropTypes.func,
  renderTags: PropTypes.func,
};

export default Tags;