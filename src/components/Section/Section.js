import propTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
