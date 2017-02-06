import * as React from 'react';
import classNames from 'classnames';
import styles from './Col.css';

const displayName = 'Col';

const propTypes =  {
    span: React.PropTypes.string,
    lgSpan: React.PropTypes.string,
    mdSpan: React.PropTypes.string,
    smSpan: React.PropTypes.string,
    nested: React.PropTypes.bool,
    rail: React.PropTypes.bool,
    className: React.PropTypes.string,
    offset: React.PropTypes.number
};

const defaultProps = {
    span: "24"
};

class Col extends React.Component {

  render () {

    //check from span string for 1-24 and keywords
    let spanStringCheck =  /\b(0?[1-9]|1[0-9]|2[0-4])\b/ || 'quarter' || 'third' || 'half';

    //set up offset class naming
    let offsetType;

    if(this.props.offset && this.props.offset >= 1) {
        offsetType = 'plus-';
    } else if(this.props.offset && this.props.offset <= 1) {
        offsetType = 'negative-';
    }

    //set-up breakpoints for offsets

    // className builder
    const colClass = classNames(
        styles.Col,
        (this.props.span && spanStringCheck ? styles['span-' + this.props.span]: null),
        (this.props.lgSpan && spanStringCheck ? styles['span-' + this.props.lgSpan]: null),
        (this.props.mdSpan && spanStringCheck ? styles['span-' + this.props.mdSpan]: null),
        (this.props.smSpan && spanStringCheck ? styles['span-' + this.props.smSpan]: null),
        (this.props.offset ? styles['offset-' + offsetType + this.props.offset]: null),
        (this.props.nested ? styles['nested']: null),
        styles[this.props.align],
        this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
    const {
        children,
        rail,
        filteredProps
    } = this.props;

    let colContent = this.props.children;

    if(!rail) {
        return (
          <div
            {...filteredProps}
            className={colClass}
          >
            {colContent}
          </div>
        );
    } else {
        return (
          <aside
            {...filteredProps}
            className={colClass}
          >
            {colContent}
        </aside>
        );
    }
  }

};

Col.displayName = displayName;

Col.propTypes = propTypes;

Col.defaultProps = defaultProps;

export default Col;
