import PropTypes from 'prop-types'
export default function SummaryCard({id,title, count}) {
  return (
    <div id={id}>
      <p>{title} {count}</p>
    </div>
  );
}
SummaryCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}
