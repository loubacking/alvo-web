import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tag } from './styled';

class Tags extends Component {
  state = {
    selectedTagsName: ["Cifra"],
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { selectedTagsName } = this.state;
    if (selectedTagsName.length !== nextState.selectedTagsName.length) {
      return true;
    }
    return false;
  };

  componentWillUpdate = (nextProps, nextState) => {
    this.handleTags(nextState.selectedTagsName);
  };

  selectTag = (tagName) => {
    const { selectedTagsName } = this.state;

    if (selectedTagsName.includes(tagName)) {
      const removeTagName = selectedTagsName.filter((x) => x !== tagName);
      this.setState({
        selectedTagsName: removeTagName,
      });
    } else {
      this.setState((prevState) => ({
        selectedTagsName: [...prevState.selectedTagsName, tagName],
      }));
    }
  };

  handleTags = (selectedTagsName) => {
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