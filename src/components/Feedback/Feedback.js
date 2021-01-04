import PropTypes from 'prop-types';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.entries(options).map(([key, label]) => (
        <button key={key} onClick={() => onLeaveFeedback(label)}>
          {label}
        </button>
      ))}
    </>
  );
}
Feedback.protoType = {
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.string,
};
