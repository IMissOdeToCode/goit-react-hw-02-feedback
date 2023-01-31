import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <p>{title}</p>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
