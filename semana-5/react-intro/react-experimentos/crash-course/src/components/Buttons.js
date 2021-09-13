import PropTypes from 'prop-types'


const Buttons = ({color, text, onClick}) => {



    return (

        <div>
            <button onClick={onClick} style={{ backgroundColor: color}} className='btn'>{text}</button>
        </div>

    )
}

Buttons.defaultProps ={
    color: 'steelblue'
}

Buttons.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    
}

export default Buttons
